export type ServiceType = 'website' | 'mobileApp' | 'consultancy' | 'enterprise';

export interface Service {
  id: ServiceType;
  name: string;
  description: string;
  icon: string;
}

