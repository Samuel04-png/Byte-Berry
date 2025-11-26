export interface PackagePrice {
  min?: number;
  max?: number;
  fixed?: number;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  priceUsd: PackagePrice;
  priceZmw: PackagePrice;
  pages?: {
    min: number;
    max: number;
  };
  features: string[];
  mostPopular?: boolean;
}

