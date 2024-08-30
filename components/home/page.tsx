import { HeroSection } from './hero-section'
import { LogoCloud } from './logo-cloud'
import { FeatureSection } from './feature-section'
import { SocialProof } from './social-proof'
import { CTA } from './cta'
import { FAQ } from './faq'
import { PricingSection } from './pricing'

function LandingPage() {
  return (
    <>
      <HeroSection />
			<LogoCloud />
			<FeatureSection />
			<SocialProof />
			<CTA />
			<FAQ />
			<PricingSection />
    </>
  )
}

export default LandingPage