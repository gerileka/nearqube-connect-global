import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"

interface HeroSectionProps {
  language: 'en' | 'fr'
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  const handleCallNow = () => {
    window.open('tel:+33662481530', '_self')
  }

  const handleContactForm = () => {
    // Will be updated with Tally URL later
    console.log('Redirect to Tally form')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Floating shapes background */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 mobile-container">
        <div className="max-w-6xl mx-auto text-center">
          {/* Brand name */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white/80 text-sm font-medium tracking-wide">PREMIUM CONSULTING SERVICES</span>
            </div>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight leading-[0.9]">
            Near<span className="text-gradient">Qube</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
            {t.hero.tagline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center mb-20">
            <Button
              size="lg"
              onClick={handleCallNow}
              className="cta-button bg-white text-primary hover:bg-white/95 px-10 py-5 text-xl font-bold shadow-2xl w-full sm:w-auto rounded-2xl"
            >
              <Phone className="h-6 w-6 mr-4" />
              {t.hero.callNow}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactForm}
              className="cta-button border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 px-10 py-5 text-xl font-bold backdrop-blur-sm w-full sm:w-auto rounded-2xl"
            >
              {t.hero.contactForm}
              <ArrowRight className="h-6 w-6 ml-4" />
            </Button>
          </div>
          
          {/* Phone number display */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-white/80 text-lg font-medium">
              {t.hero.phoneDisplay}: <span className="text-white font-semibold">+33 6 62 48 15 30</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}