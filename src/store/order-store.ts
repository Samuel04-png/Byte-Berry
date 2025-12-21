import { atom } from 'jotai';
import { ServiceType } from '@/types/service';
import { Customizations } from '@/types/order';
import { CalculatedPrice } from '@/types/pricing';
import { fetchExchangeRate } from '@/services/exchange-rate-service';
import { calculatePrice } from '@/utils/price-calculator';

// Base atoms
export const selectedServiceAtom = atom<ServiceType | null>(null);
export const selectedPackageAtom = atom<string | null>(null);
export const projectDescriptionAtom = atom<string>('');
export const customizationsAtom = atom<Customizations>({
  addOns: [],
});

// Exchange rate atom with async initialization
const exchangeRateCacheAtom = atom<number | null>(null);

// Async atom to fetch exchange rate
export const exchangeRateAsyncAtom = atom(
  async (get) => {
    const cached = get(exchangeRateCacheAtom);
    if (cached !== null) {
      return cached;
    }
    const rate = await fetchExchangeRate();
    return rate;
  },
  async (_get, set) => {
    const rate = await fetchExchangeRate();
    set(exchangeRateCacheAtom, rate);
    return rate;
  }
);

// Derived atom for calculated price - returns Promise for manual handling
export const calculatedPriceAtom = atom(async (get): Promise<CalculatedPrice> => {
  const serviceType = get(selectedServiceAtom);
  const packageType = get(selectedPackageAtom);
  const customizations = get(customizationsAtom);
  const exchangeRate = await get(exchangeRateAsyncAtom);

  if (!serviceType || !exchangeRate) {
    return {
      totalZmw: 0,
      totalUsd: 0,
      exchangeRate: exchangeRate ?? 25.0,
      breakdown: {
        base: { zmw: 0, usd: 0 },
        addOns: { zmw: 0, usd: 0 },
        hosting: { zmw: 0, usd: 0 },
      },
    };
  }

  return calculatePrice(serviceType, packageType, customizations, exchangeRate);
});

// Order summary atom
export const orderSummaryAtom = atom((get) => {
  const serviceType = get(selectedServiceAtom);
  const packageType = get(selectedPackageAtom);
  const customizations = get(customizationsAtom);
  const projectDescription = get(projectDescriptionAtom);

  return {
    serviceType,
    packageType,
    customizations,
    projectDescription,
  };
});

