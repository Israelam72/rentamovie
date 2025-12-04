import HeroSection from "@/components/layout/landing-page/hero-section"
import FeatureSection from "@/components/layout/landing-page/feature-section"
import PricingSection from "@/components/layout/landing-page/pricing-section"
import CTA from "@/components/layout/landing-page/cta-section"

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <CTA />
    </div>
  )
}
