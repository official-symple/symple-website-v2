import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { TechnologySection } from './components/TechnologySection';
import { ProductTabsSection } from './components/ProductTabsSection';
import { DataImpactSection } from './components/DataImpactSection';
import { PartnershipSection } from './components/PartnershipSection';
import { PartnerLogos } from './components/PartnerLogos';
import { ReviewsSection } from './components/ReviewsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <TechnologySection />
      <ProductTabsSection />
      <DataImpactSection />
      <PartnershipSection />
      <PartnerLogos />
      <ReviewsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}