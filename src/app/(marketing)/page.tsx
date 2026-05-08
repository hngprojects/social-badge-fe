import Hero from './components/Hero';
import TrustedBy from './components/Trusted-by';
export default function LandingPage() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <div className="max-w-360 mx-auto py-2 px-4 sm:px-6 lg:px-8"></div>
    </div>
  );
}
