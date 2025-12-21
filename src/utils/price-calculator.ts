import { ServiceType } from '@/types/service';
import { Customizations } from '@/types/order';
import { CalculatedPrice } from '@/types/pricing';
import { PRICING_DATA } from '@/data/pricing-data';
import { EXTRA_PAGE_COST_ZMW, EXTRA_PAGE_COST_USD } from '@/utils/constants';
import { convertZmwToUsd } from '@/services/exchange-rate-service';

/**
 * Calculate total price based on service, package, and customizations
 */
export async function calculatePrice(
  serviceType: ServiceType | null,
  packageType: string | null,
  customizations: Customizations,
  exchangeRate: number
): Promise<CalculatedPrice> {
  let basePriceZmw = 0;
  let basePriceUsd = 0;

  // Get base price based on service and package
  if (serviceType === 'website' && packageType) {
    const pkg = PRICING_DATA.websitePackages[packageType];
    if (pkg) {
      if (pkg.priceZmw.fixed !== undefined) {
        basePriceZmw = pkg.priceZmw.fixed;
        basePriceUsd = pkg.priceUsd.fixed ?? basePriceZmw / exchangeRate;
      } else if (pkg.priceZmw.min !== undefined) {
        basePriceZmw = pkg.priceZmw.min;
        basePriceUsd = pkg.priceUsd.min ?? basePriceZmw / exchangeRate;
      }

      // Add extra pages cost if exceeds package limit
      const pages = customizations.pages ?? 1;
      const maxPages = pkg.pages?.max ?? Infinity;
      if (pages > maxPages) {
        const extraPages = pages - maxPages;
        basePriceZmw += extraPages * EXTRA_PAGE_COST_ZMW;
        basePriceUsd += extraPages * EXTRA_PAGE_COST_USD;
      }
    }
  } else if (serviceType === 'mobileApp' && packageType) {
    const pkg = PRICING_DATA.mobileAppPackages[packageType];
    if (pkg) {
      if (pkg.priceZmw.fixed !== undefined) {
        basePriceZmw = pkg.priceZmw.fixed;
        basePriceUsd = pkg.priceUsd.fixed ?? basePriceZmw / exchangeRate;
      } else if (pkg.priceZmw.min !== undefined) {
        basePriceZmw = pkg.priceZmw.min;
        basePriceUsd = pkg.priceUsd.min ?? basePriceZmw / exchangeRate;
      }
    } else {
      // Fallback to service base price
      const service = PRICING_DATA.services.mobileApp;
      basePriceZmw = service.basePriceZmw;
      basePriceUsd = service.basePriceUsd;
    }
  } else if (serviceType === 'consultancy' && packageType) {
    const pkg = PRICING_DATA.consultancyPackages[packageType];
    if (pkg) {
      if (pkg.priceZmw.fixed !== undefined) {
        basePriceZmw = pkg.priceZmw.fixed;
        basePriceUsd = pkg.priceUsd.fixed ?? basePriceZmw / exchangeRate;
      } else if (pkg.priceZmw.min !== undefined) {
        basePriceZmw = pkg.priceZmw.min;
        basePriceUsd = pkg.priceUsd.min ?? basePriceZmw / exchangeRate;
      }
    } else {
      // Fallback to service base price
      const service = PRICING_DATA.services.consultancy;
      basePriceZmw = service.basePriceZmw;
      basePriceUsd = service.basePriceUsd;
    }
  } else if (serviceType === 'enterprise' && packageType) {
    const pkg = PRICING_DATA.enterprisePackages[packageType];
    if (pkg) {
      if (pkg.priceZmw.fixed !== undefined) {
        basePriceZmw = pkg.priceZmw.fixed;
        basePriceUsd = pkg.priceUsd.fixed ?? basePriceZmw / exchangeRate;
      } else if (pkg.priceZmw.min !== undefined) {
        basePriceZmw = pkg.priceZmw.min;
        basePriceUsd = pkg.priceUsd.min ?? basePriceZmw / exchangeRate;
      }
    } else {
      // Fallback to service base price
      const service = PRICING_DATA.services.enterprise;
      if (service.priceZmw.min !== undefined) {
        basePriceZmw = service.priceZmw.min;
        basePriceUsd = service.priceUsd.min ?? basePriceZmw / exchangeRate;
      }
    }
  }

  // Calculate add-ons
  let addOnsZmw = 0;
  let addOnsUsd = 0;

  const selectedAddOns = customizations.addOns ?? [];
  for (const addOn of selectedAddOns) {
    const addOnData = PRICING_DATA.addOns[addOn as keyof typeof PRICING_DATA.addOns];
    if (addOnData) {
      if (typeof addOnData.priceZmw === 'number') {
        addOnsZmw += addOnData.priceZmw;
        addOnsUsd += addOnData.priceUsd as number;
      } else if (addOnData.priceZmw.min !== undefined) {
        addOnsZmw += addOnData.priceZmw.min;
        addOnsUsd += (addOnData.priceUsd as { min: number }).min;
      }
    }
  }

  // Add hosting if selected
  let hostingZmw = 0;
  let hostingUsd = 0;

  if (customizations.hosting && customizations.hostingType) {
    const hostingType = customizations.hostingType;
    const hostingPlan = customizations.hosting;
    const hostingPlans = hostingType === 'website' 
      ? PRICING_DATA.hostingPlans.website 
      : hostingType === 'app'
      ? PRICING_DATA.hostingPlans.app
      : null;
    
    if (hostingPlans && hostingPlan) {
      const hosting = (hostingPlans as Record<string, { priceZmw: number; features: readonly string[] }>)[hostingPlan];
      if (hosting) {
        hostingZmw = hosting.priceZmw;
        hostingUsd = await convertZmwToUsd(hostingZmw);
      }
    }
  }

  // Calculate totals
  const totalZmw = basePriceZmw + addOnsZmw + hostingZmw;
  const totalUsd = basePriceUsd + addOnsUsd + hostingUsd;

  return {
    totalZmw,
    totalUsd,
    exchangeRate,
    breakdown: {
      base: { zmw: basePriceZmw, usd: basePriceUsd },
      addOns: { zmw: addOnsZmw, usd: addOnsUsd },
      hosting: { zmw: hostingZmw, usd: hostingUsd },
    },
  };
}

