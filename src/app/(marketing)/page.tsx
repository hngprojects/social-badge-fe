import BenefitSection from './components/benefits-section';
import FAQ from './components/faq-section';
import Feature from './components/features-section';
import Hero from './components/hero-section';
import Templates from './components/templates-section';
import Testimonials from './components/testimonials-section';
import TrustedBy from './components/trusted-by-section';
import TryItNow from './components/try-it-now-section';

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Feature />
      <TryItNow />
      <BenefitSection />
      <Templates />
      <Testimonials />
      <FAQ />
    </div>
  );
}
