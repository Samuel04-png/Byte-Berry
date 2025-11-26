import { Package } from '@/types/package';

export const PRICING_DATA = {
  websitePackages: {
    starter: {
      name: 'Starter Site',
      description: 'Perfect for small businesses getting started online',
      priceUsd: { fixed: 300 },
      priceZmw: { fixed: 7500 },
      pages: { min: 1, max: 3 },
      features: ['responsive', 'whatsapp', 'basic-seo'],
    },
    growth: {
      name: 'Growth Site',
      description: 'Ideal for growing businesses with more features',
      priceUsd: { min: 600, max: 900 },
      priceZmw: { min: 15000, max: 22500 },
      pages: { min: 4, max: 7 },
      features: ['blog', 'gallery', 'form', 'ai-chatbot', '1-month-hosting'],
      mostPopular: true,
    },
    pro: {
      name: 'Pro Website',
      description: 'Advanced features for professional businesses',
      priceUsd: { min: 1000, max: 1800 },
      priceZmw: { min: 25000, max: 45000 },
      pages: { min: 8, max: 12 },
      features: ['dashboard', 'booking', 'analytics', 'ai-assistant'],
    },
    premium: {
      name: 'Premium Suite',
      description: 'Complete solution with all features included',
      priceUsd: { min: 2000, max: 3000 },
      priceZmw: { min: 50000, max: 75000 },
      pages: { min: 1, max: 999 },
      features: ['custom-web-app', 'payments', 'ai', 'automation', 'hosting'],
    },
  } as Record<string, Omit<Package, 'id'>>,

  hostingPlans: {
    website: {
      basic: { priceZmw: 250, features: ['1-site', 'https', '10gb-transfer', 'daily-backups'] },
      pro: { priceZmw: 600, features: ['2-sites', '50gb', 'staging', 'on-demand-backups', 'priority-support'] },
      business: { priceZmw: 1200, features: ['5-sites', '200gb', 'waf-cdn', 'uptime-sla', 'performance-monitoring'] },
    },
    app: {
      starter: { priceZmw: 1500, features: ['monitoring', 'monthly-updates', 'basic-incident-support'] },
      growth: { priceZmw: 3500, features: ['bi-weekly-updates', 'crash-analytics', 'api-health-checks', 'slos'] },
      scale: { priceZmw: 7500, features: ['weekly-updates', 'on-call', 'load-testing', 'advanced-sre'] },
    },
  },

  addOns: {
    'ai-chatbot': { priceUsd: 500, priceZmw: 12500 },
    'ai-assistant': { priceUsd: 500, priceZmw: 12500 },
    'payment-gateway': { priceUsd: { min: 250, max: 1000 }, priceZmw: { min: 6250, max: 25000 } },
    'analytics-dashboard': { priceUsd: 700, priceZmw: 17500 },
    'offline-mode': { priceUsd: 300, priceZmw: 7500 },
    'user-authentication': { priceUsd: 200, priceZmw: 5000 },
    'whatsapp-bot': { priceUsd: 250, priceZmw: 6250 },
  },

  mobileAppPackages: {
    starter: {
      name: 'Starter App',
      description: 'Basic mobile app for iOS and Android with core features',
      priceUsd: { fixed: 1000 },
      priceZmw: { fixed: 25000 },
      features: ['ios-android', 'user-auth', 'push-notifications', 'basic-ui'],
    },
    growth: {
      name: 'Growth App',
      description: 'Advanced features for growing businesses',
      priceUsd: { min: 2000, max: 4000 },
      priceZmw: { min: 50000, max: 100000 },
      features: ['offline-mode', 'analytics', 'payment-integration', 'social-login', 'cloud-sync'],
      mostPopular: true,
    },
    enterprise: {
      name: 'Enterprise App',
      description: 'Full-featured app with custom solutions',
      priceUsd: { min: 5000, max: 15000 },
      priceZmw: { min: 125000, max: 375000 },
      features: ['custom-backend', 'advanced-security', 'biometric-auth', 'real-time-sync', 'white-label'],
    },
  } as Record<string, Omit<Package, 'id'>>,

  consultancyPackages: {
    basic: {
      name: 'Basic Consultancy',
      description: 'Essential IT and digital strategy guidance',
      priceUsd: { fixed: 700 },
      priceZmw: { fixed: 17500 },
      features: ['tech-stack-review', 'architecture-advice', 'vendor-selection', '1-session'],
    },
    standard: {
      name: 'Standard Consultancy',
      description: 'Comprehensive digital transformation guidance',
      priceUsd: { min: 1500, max: 3000 },
      priceZmw: { min: 37500, max: 75000 },
      features: ['digital-transformation', 'cloud-migration', 'security-audit', 'roadmap-planning', '3-sessions'],
      mostPopular: true,
    },
    premium: {
      name: 'Premium Consultancy',
      description: 'Full-scale enterprise IT strategy and implementation',
      priceUsd: { min: 5000, max: 10000 },
      priceZmw: { min: 125000, max: 250000 },
      features: ['enterprise-architecture', 'ongoing-support', 'team-training', 'implementation-guidance', 'unlimited-sessions'],
    },
  } as Record<string, Omit<Package, 'id'>>,

  enterprisePackages: {
    starter: {
      name: 'Starter Enterprise',
      description: 'Basic enterprise system for small to medium organizations',
      priceUsd: { min: 2000, max: 5000 },
      priceZmw: { min: 50000, max: 125000 },
      features: ['core-modules', 'user-management', 'basic-reporting', 'data-backup'],
    },
    professional: {
      name: 'Professional Enterprise',
      description: 'Comprehensive enterprise solution with advanced features',
      priceUsd: { min: 5000, max: 15000 },
      priceZmw: { min: 125000, max: 375000 },
      features: ['all-modules', 'advanced-analytics', 'api-integration', 'custom-workflows', 'priority-support'],
      mostPopular: true,
    },
    enterprise: {
      name: 'Enterprise Suite',
      description: 'Complete enterprise solution with full customization',
      priceUsd: { min: 15000, max: 50000 },
      priceZmw: { min: 375000, max: 1250000 },
      features: ['fully-custom', 'multi-tenant', 'advanced-security', 'dedicated-support', 'training', 'maintenance'],
    },
  } as Record<string, Omit<Package, 'id'>>,

  services: {
    mobileApp: { basePriceUsd: 1000, basePriceZmw: 25000, includes: ['ios-android', 'user-auth', 'push-notifications'] },
    consultancy: { basePriceUsd: 700, basePriceZmw: 17500, includes: ['architecture', 'digital-transformation', 'vendor-selection'] },
    enterprise: { priceUsd: { min: 2000, max: 10000 }, priceZmw: { min: 50000, max: 250000 } },
  },

  whatsappNumber: '0760580949',
  calendlyUrl: 'https://calendly.com/skamanga85/byte-berry-discovery-call',
} as const;

