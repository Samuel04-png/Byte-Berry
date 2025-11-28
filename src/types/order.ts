import { ServiceType } from './service';

export interface Customizations {
  pages?: number;
  addOns: string[];
  hosting?: string;
  hostingType?: 'website' | 'app';
  platform?: 'ios' | 'android' | 'both';
  modules?: string[];
  numberOfUsers?: number;
}

export interface Order {
  id: string;
  timestamp: string;
  serviceType: ServiceType;
  package: string;
  customizations: Customizations;
  projectDescription?: string;
  totalPrice: {
    zmw: number;
    usd: number;
  };
  exchangeRate: number;
}

