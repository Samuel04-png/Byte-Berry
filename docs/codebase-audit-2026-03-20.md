# Byte & Berry Codebase Audit

Date: 2026-03-20

## Package Audit

- `package.json`: Active app is Next.js 14 + TypeScript + Tailwind + Framer Motion. Legacy Vite dependencies still exist because the old estimator app is still in `src/`. `gsap` and `@gsap/react` are installed and available. Action: keep for now, then prune legacy Vite-only deps after the redesign if the old app is no longer needed.

## File-by-File Audit

### Active Next App Router Surface

- `app/layout.tsx`: Root layout with current fonts, metadata, navbar/footer/floating WhatsApp shell. Action: rewrite.
- `app/page.tsx`: Current homepage composition with organization schema and six sections. Action: rewrite.
- `app/globals.css`: Global tokens and component classes for the current dark-mode system. Action: rewrite.
- `app/not-found.tsx`: Simple 404 page using current dark design system. Action: rewrite.
- `app/work/page.tsx`: Work landing page wrapping the current portfolio section. Action: rewrite.
- `app/work/[slug]/page.tsx`: Dynamic case-study detail route with hero image, summary cards, gallery, and related work. Action: rewrite.
- `app/services/page.tsx`: Services landing page using current dark section blocks. Action: rewrite.
- `app/products/page.tsx`: Products page using current products and traction sections. Action: rewrite or replace if products move into homepage/supporting pages.
- `app/contact/page.tsx`: Contact page with WhatsApp CTA and founder cards. Action: rewrite.
- `app/robots.ts`: Generates robots metadata route. Action: keep with minor metadata updates.
- `app/sitemap.ts`: Generates sitemap from route list and project slugs. Action: keep with content updates.

### Active Site Components

- `components/site/navbar.tsx`: Current transparent/dark nav with mobile overlay and WhatsApp CTA. Action: rewrite.
- `components/site/hero-section.tsx`: Current dark hero with typed headline and floating mini-card bento. Action: rewrite.
- `components/site/portfolio-section.tsx`: Current dark bento portfolio grid and marquee. Action: replace with GSAP horizontal work section.
- `components/site/pain-solution-section.tsx`: Current two-card dark/light conversion section. Action: rewrite.
- `components/site/services-section.tsx`: Current six-card grid of services. Action: rewrite.
- `components/site/traction-section.tsx`: Current stat cards and quote card. Action: rewrite into the new proof section.
- `components/site/products-section.tsx`: Current product cards section. Action: remove from homepage flow or repurpose later; not part of the requested homepage order.
- `components/site/footer.tsx`: Current dark footer with simple columns and social links. Action: rewrite.
- `components/site/floating-whatsapp.tsx`: Current floating WhatsApp button without the new tooltip/session behavior. Action: rewrite.
- `components/site/section-intro.tsx`: Simple heading/description helper. Action: likely keep and restyle, or replace if the new editorial headings need more control.
- `components/site/reveal.tsx`: Framer Motion reveal wrappers. Action: replace or simplify to match the new animation system.
- `components/site/icons.tsx`: Custom SVG icons for WhatsApp/social/navigation arrows. Action: keep and extend.

### Active Shared Data and Utilities

- `data/site-data.ts`: Current site config, projects, services, products, and helper selectors. Action: rewrite content model to include all 10 requested projects, corrected imagery, accent colors, and the new section data.
- `lib/utils.ts`: Local `cn()` helper. Action: keep.
- `lib/use-prefers-reduced-motion.ts`: Hydration-safe motion preference hook. Action: keep.
- `tailwind.config.ts`: Current theme extensions for the dark system. Action: rewrite.
- `next-env.d.ts`: Next type declarations. Action: keep.

### Legacy Vite App Entry and Styling

- `vite.config.ts`: Legacy Vite/GitHub Pages build config, no longer needed for the Next marketing site. Action: delete/archive after confirming the old estimator app is not shipping.
- `src/main.tsx`: Vite entrypoint that mounts the old SPA. Action: archive/delete.
- `src/App.tsx`: Old provider shell for Jotai, Router, TooltipProvider, and ErrorBoundary. Action: archive/delete.
- `src/router.tsx`: React Router routes for the old service-estimator/public-pages flow. Action: archive/delete.
- `src/index.css`: Old shadcn/light-purple design system with particle/background utilities and mobile overrides. Action: archive/delete.
- `src/vite-env.d.ts`: Vite env typing. Action: archive/delete with Vite cleanup.

### Legacy Vite Pages

- `src/legacy-pages/HomePage.tsx`: Old marketing homepage with generic gradients, particle background, TengaLoans promo, and case study cards. Action: archive/delete.
- `src/legacy-pages/ServicesPage.tsx`: Old service/pricing overview with currency toggle and estimator CTA. Action: archive/delete.
- `src/legacy-pages/ServiceSelectionPage.tsx`: Estimator step for choosing service and package. Action: keep only if the estimator product is still wanted; otherwise archive/delete.
- `src/legacy-pages/CustomizationPage.tsx`: Estimator customization form for pages, hosting, modules, and add-ons. Action: keep only for the estimator product; otherwise archive/delete.
- `src/legacy-pages/SummaryPage.tsx`: Estimator review/summary screen. Action: keep only for the estimator product; otherwise archive/delete.
- `src/legacy-pages/ContractPage.tsx`: Estimator contract/invoice handoff with WhatsApp and Calendly CTAs. Action: keep only for the estimator product; otherwise archive/delete.
- `src/legacy-pages/AboutPage.tsx`: Old about page with founders, mission/vision, and social proof. Action: archive/delete.
- `src/legacy-pages/CaseStudiesPage.tsx`: Old case study listing for the Vite site. Action: archive/delete.
- `src/legacy-pages/CaseStudyDetailPage.tsx`: Old case study detail template with gallery carousel and cards. Action: archive/delete.
- `src/legacy-pages/ContactPage.tsx`: Old contact page with Calendly embed and generic support copy. Action: archive/delete.

### Legacy Domain Data

- `src/data/caseStudies.ts`: Legacy case study model and project data for the old Vite site, with outdated paths and project set. Action: archive/delete after migrating any useful copy.
- `src/data/pricing-data.ts`: Legacy service/package/hosting/add-on pricing model for the estimator. Action: keep only if the estimator stays; otherwise archive/delete.

### Legacy Types and Store

- `src/types/service.ts`: Legacy estimator service types. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/types/pricing.ts`: Legacy pricing result types. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/types/package.ts`: Legacy package type definitions. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/types/order.ts`: Legacy order/customization typing. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/store/order-store.ts`: Jotai order state for the estimator flow. Action: keep only if the estimator stays; otherwise archive/delete.

### Legacy Services and Utilities

- `src/services/storage-service.ts`: localStorage persistence for estimator orders. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/services/gemini-service.ts`: Actually uses DeepSeek endpoints for AI recommendations/contracts/invoice copy. Action: rewrite or delete; unsafe as-is and not needed for the marketing site.
- `src/services/exchange-rate-service.ts`: USD/ZMW exchange fetcher and cache for estimator pricing. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/utils/price-calculator.ts`: Async pricing calculator for the estimator. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/utils/invoice-generator.ts`: PDF invoice generator using jsPDF and AI-generated descriptions. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/utils/imageUtils.ts`: Helper for Vite base-path image URLs. Action: archive/delete.
- `src/utils/contract-generator.ts`: PDF contract generator using jsPDF and AI-generated terms. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/utils/constants.ts`: Legacy constants with exposed API keys, WhatsApp number, and Calendly link. Action: delete secrets immediately and archive/delete the file from the public repo.
- `src/lib/utils.ts`: Legacy `cn()` helper duplicated in the Next app. Action: archive/delete or consolidate.

### Legacy Layout and Shell Components

- `src/components/layout/Layout.tsx`: Legacy page shell with app bar, step wizard, and footer. Action: archive/delete.
- `src/components/layout/AppBar.tsx`: Legacy navigation bar for the old SPA. Action: archive/delete.
- `src/components/layout/Footer.tsx`: Legacy footer for the old SPA. Action: archive/delete.
- `src/components/layout/StepWizard.tsx`: Progress indicator for the estimator flow. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ErrorBoundary.tsx`: Generic React class error boundary used by the old SPA. Action: keep only if the estimator stays; otherwise archive/delete.

### Legacy Estimator and Interaction Components

- `src/components/service/ServiceCard.tsx`: Clickable service picker card. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/service/PackageCard.tsx`: Package picker card with price and feature list. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/service/DetailedDeliverables.tsx`: Dialog listing included deliverables per package. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/pricing/PriceDisplay.tsx`: Price renderer with optional accordion breakdown. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/pricing/PricingSummaryPanel.tsx`: Desktop sticky summary panel. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/pricing/PricingBottomSheet.tsx`: Mobile order summary drawer. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/customization/FeatureToggle.tsx`: Feature switch row with optional tooltip. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/customization/HostingSelector.tsx`: Hosting plan selector. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/customization/InfoTooltip.tsx`: Small tooltip helper. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/actions/WhatsAppButton.tsx`: Estimator CTA that constructs a WhatsApp order message. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/actions/PDFExportButton.tsx`: Contract/invoice PDF export trigger. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/CalendlyWidget.tsx`: Client-side Calendly embed loader. Action: keep only if the estimator/contact flow still needs it; otherwise archive/delete.
- `src/components/ai/AIRecommendationWidget.tsx`: AI recommendation card for the old estimator. Action: archive/delete.

### Legacy UI Primitive Layer

- `src/components/ui/accordion.tsx`: Radix accordion wrapper. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/alert.tsx`: Alert primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/badge.tsx`: Badge primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/button.tsx`: Heavily styled shadcn-style button primitive for the old design system. Action: archive/delete.
- `src/components/ui/card.tsx`: Card primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/checkbox.tsx`: Checkbox primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/dialog.tsx`: Dialog primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/input.tsx`: Input primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/label.tsx`: Label primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/progress.tsx`: Progress primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/select.tsx`: Select primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/separator.tsx`: Separator primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/sheet.tsx`: Sheet/drawer primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/switch.tsx`: Switch primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/textarea.tsx`: Textarea primitive. Action: keep only if the estimator stays; otherwise archive/delete.
- `src/components/ui/tooltip.tsx`: Tooltip primitive. Action: keep only if the estimator stays; otherwise archive/delete.

## Audit Summary

- The active public-facing marketing site is the Next.js App Router implementation in `app/`, `components/site/`, `data/`, and `lib/`.
- The current live marketing design is structurally workable but visually wrong for the new brief: dark by default, generic cards, and too many boxed sections.
- The repository still contains a full legacy Vite/Jotai/React Router estimator app under `src/`. It is not aligned with the new brand language and should be treated as a separate product, not as the basis for the marketing redesign.
- Some project data in the current Next site is incomplete for the requested 10-project portfolio. The new work section should pull from the real local project images in `public/assets` / existing project asset folders and normalize them.
- `src/utils/constants.ts` contains exposed keys and should not remain in a public repository.

## Build Direction

- Rebuild the active Next marketing site in place.
- Keep the Next app shell and route structure.
- Replace the current dark design system with the new light/editorial system.
- Add GSAP-powered interactions only on the active Next site.
- Do not reuse the legacy Vite marketing UI; only salvage any useful copy/data if needed.
