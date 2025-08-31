import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"

interface HeroSectionProps {
  language: 'en' | 'fr'
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]
  const [showPhone, setShowPhone] = useState(false)

  const handleCallNow = () => {
    setShowPhone(true)
    setTimeout(() => {
      window.open('tel:+33662481530', '_self')
    }, 1000)
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
      
      {/* Content Container */}
      <div className="relative z-20 mobile-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Brand Badge */}
              <div className="mb-8">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <span className="text-primary text-sm font-medium tracking-wide">PREMIUM CONSULTING SERVICES</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 tracking-tight leading-[0.9]">
                Near<span className="text-gradient">Qube</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                {t.hero.tagline}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  onClick={handleCallNow}
                  className="cta-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-bold shadow-xl rounded-xl"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  {t.hero.callNow}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleContactForm}
                  className="cta-button border-2 border-border text-foreground hover:bg-secondary px-8 py-4 text-lg font-bold rounded-xl"
                >
                  {t.hero.contactForm}
                  <ArrowRight className="h-5 w-5 ml-3" />
                </Button>
              </div>
              
              {/* Phone Display - only show when call button is clicked */}
              {showPhone && (
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/50 border border-border backdrop-blur-sm animate-fade-in">
                  <p className="text-muted-foreground text-base">
                    {t.hero.phoneDisplay}: <span className="text-foreground font-semibold">+33 6 62 48 15 30</span>
                  </p>
                </div>
              )}
            </div>
            
            {/* Right Content - GPU Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e31e26bb-39ec-4c16-81b9-7a1a3cecc6bd.png"
                  alt="High-performance GPU for AI computing"
                  className="w-80 h-60 lg:w-96 lg:h-72 object-contain filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating tech elements around GPU */}
                <div className="absolute -top-8 -left-8 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-12 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}