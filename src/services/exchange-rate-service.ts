import { EXCHANGE_RATE_API_URL, FALLBACK_EXCHANGE_RATE, EXCHANGE_RATE_CACHE_DURATION } from '@/utils/constants';

interface ExchangeRateCache {
  rate: number;
  timestamp: number;
}

let cache: ExchangeRateCache | null = null;

/**
 * Fetch USD to ZMW exchange rate from API
 * Caches the result for 1 hour to reduce API calls
 */
export async function fetchExchangeRate(): Promise<number> {
  // Return cached rate if valid (less than 1 hour old)
  if (cache && Date.now() - cache.timestamp < EXCHANGE_RATE_CACHE_DURATION) {
    return cache.rate;
  }

  try {
    const response = await fetch(EXCHANGE_RATE_API_URL);
    
    if (!response.ok) {
      throw new Error(`Exchange rate API error: ${response.status}`);
    }

    const data = await response.json();
    const rates = data.conversion_rates as Record<string, number>;
    const zmwRate = rates['ZMW'] as number;

    if (!zmwRate || isNaN(zmwRate)) {
      throw new Error('Invalid exchange rate received');
    }

    // Cache the rate
    cache = {
      rate: zmwRate,
      timestamp: Date.now(),
    };

    return zmwRate;
  } catch (error) {
    console.warn('Error fetching exchange rate:', error);
    // Return cached rate if available, otherwise fallback
    return cache?.rate ?? FALLBACK_EXCHANGE_RATE;
  }
}

/**
 * Convert USD to ZMW using real-time rate
 */
export async function convertUsdToZmw(usdAmount: number): Promise<number> {
  const rate = await fetchExchangeRate();
  return usdAmount * rate;
}

/**
 * Convert ZMW to USD using real-time rate
 */
export async function convertZmwToUsd(zmwAmount: number): Promise<number> {
  const rate = await fetchExchangeRate();
  return zmwAmount / rate;
}

