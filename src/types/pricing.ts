export interface PriceBreakdown {
  base: {
    zmw: number;
    usd: number;
  };
  addOns: {
    zmw: number;
    usd: number;
  };
  hosting: {
    zmw: number;
    usd: number;
  };
}

export interface CalculatedPrice {
  totalZmw: number;
  totalUsd: number;
  exchangeRate: number;
  breakdown: PriceBreakdown;
}

