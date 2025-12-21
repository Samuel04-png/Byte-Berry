# Byte&Berry Self-Service Web Application

A modern, responsive React web application that enables clients to explore, customize, and understand pricing for Byte&Berry's digital services.

## Features

- **Service Selection**: Choose from Website Development, Mobile Apps, Consultancy, or Enterprise Systems
- **Package Customization**: Select features, add-ons, and hosting plans
- **Real-time Pricing**: Dynamic price calculation with live exchange rates (USD to ZMW)
- **AI Recommendations**: Get AI-powered service recommendations using Google Gemini
- **Contract & Invoice Generation**: Download PDF contracts and invoices
- **WhatsApp Integration**: Seamless order placement via WhatsApp
- **Responsive Design**: Mobile-first design with collapsible summary panel
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Jotai** for state management
- **React Router** for navigation
- **jsPDF** for PDF generation
- **Google Gemini AI** for recommendations
- **ExchangeRate-API** for currency conversion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add the Byte&Berry logo:
   - Place `logo.png` in `public/byteandberrylogo/logo.png`
   - Or update the logo path in `src/components/layout/AppBar.tsx`

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/       # React components
│   ├── layout/      # AppBar, Footer, StepWizard
│   ├── service/     # ServiceCard, PackageCard
│   ├── customization/ # FeatureToggle, InfoTooltip
│   ├── pricing/     # PricingSummaryPanel, PriceDisplay
│   ├── ai/          # AIRecommendationWidget
│   ├── actions/     # WhatsAppButton, PDFExportButton
│   └── ui/          # shadcn/ui components
├── pages/           # Page components
├── services/        # API services (Exchange Rate, Gemini, Storage)
├── store/           # Jotai state management
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── data/            # Pricing data constants
```

## Configuration

### API Keys

The following API keys are configured in `src/utils/constants.ts`:

- **Exchange Rate API**: `6d2a0bd85b442a472e2d6f7d`
- **Gemini API**: `AIzaSyBiQStpG7IehHh3KiYWg4aoC614Uy7kles`
- **WhatsApp Number**: `0760580949`

⚠️ **Note**: For production, consider moving these to environment variables.

## Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push code to the `main` branch
2. GitHub Actions will automatically build and deploy to the `gh-pages` branch
3. Enable GitHub Pages in repository settings (source: `gh-pages` branch)

The app will be available at: `https://[username].github.io/byteandberry-selfservice-app/`

## Features in Detail

### Service Selection
- Choose service type (Website, Mobile App, Consultancy, Enterprise)
- For websites, select from Starter, Growth, Pro, or Premium packages
- "Most Popular" badges highlight recommended packages

### Customization
- Toggle add-on features (AI chatbot, payment gateway, analytics, etc.)
- Select hosting/maintenance plans
- Specify number of pages (for websites)
- Info tooltips explain AI-powered features

### Pricing
- Real-time exchange rate conversion (USD ↔ ZMW)
- Price breakdown showing base, add-ons, and hosting costs
- Sticky summary panel on desktop
- Collapsible bottom sheet on mobile

### AI Recommendations
- Describe your business needs
- Get AI-powered package recommendations
- Powered by Google Gemini

### Contract & Invoice
- Generate branded PDF contracts
- Generate itemized PDF invoices
- Custom terms support
- Download for records

### WhatsApp Integration
- Pre-filled message with order summary
- Opens WhatsApp Web/App directly
- Streamlined order placement

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Byte&Berry. All rights reserved.

