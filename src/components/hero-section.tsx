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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
            Near<span className="text-gradient">Qube</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            {t.hero.tagline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={handleCallNow}
              className="cta-button bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-bold shadow-2xl w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 mr-3" />
              {t.hero.callNow}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactForm}
              className="cta-button border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-bold backdrop-blur-sm w-full sm:w-auto"
            >
              {t.hero.contactForm}
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
          </div>
          
          {/* Phone number display */}
          <p className="text-white/70 text-base font-medium">
            {t.hero.phoneDisplay}: +33 6 62 48 15 30
          </p>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}