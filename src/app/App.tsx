import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';

const ProblemSection = lazy(() =>
  import('./components/ProblemSection').then((module) => ({ default: module.ProblemSection })),
);
const TechnologySection = lazy(() =>
  import('./components/TechnologySection').then((module) => ({ default: module.TechnologySection })),
);
const ProductTabsSection = lazy(() =>
  import('./components/ProductTabsSection').then((module) => ({ default: module.ProductTabsSection })),
);
const DataImpactSection = lazy(() =>
  import('./components/DataImpactSection').then((module) => ({ default: module.DataImpactSection })),
);
const PartnershipSection = lazy(() =>
  import('./components/PartnershipSection').then((module) => ({ default: module.PartnershipSection })),
);
const PartnerLogos = lazy(() =>
  import('./components/PartnerLogos').then((module) => ({ default: module.PartnerLogos })),
);
const ReviewsSection = lazy(() =>
  import('./components/ReviewsSection').then((module) => ({ default: module.ReviewsSection })),
);
const FinalCTA = lazy(() =>
  import('./components/FinalCTA').then((module) => ({ default: module.FinalCTA })),
);
const Footer = lazy(() =>
  import('./components/Footer').then((module) => ({ default: module.Footer })),
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemSection />
        <TechnologySection />
        <ProductTabsSection />
        <DataImpactSection />
        <PartnershipSection />
        <PartnerLogos />
        <ReviewsSection />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
}
