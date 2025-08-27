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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Brand name */}
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
            Near<span className="text-gradient">Qube</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.tagline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={handleCallNow}
              className="cta-button bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              {t.hero.callNow}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactForm}
              className="cta-button border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold flex items-center gap-3"
            >
              {t.hero.contactForm}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Phone number display */}
          <p className="text-primary-foreground/70 mt-8 text-sm">
            {t.hero.phoneDisplay}: +33 6 62 48 15 30
          </p>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}