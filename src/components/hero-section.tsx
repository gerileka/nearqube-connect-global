import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { translations } from "@/lib/translations"

interface HeroSectionProps {
  language: 'en' | 'fr'
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]
  const [showPhone, setShowPhone] = useState(false)

  const handleCallNow = () => {
    setShowPhone(true)
  }

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('contact@nearqube.com')
    // Could add a toast notification here
  }

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText('+33 6 62 48 15 30')
    // Could add a toast notification here
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
                  onClick={handleCopyPhone}
                  className="cta-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-bold shadow-xl rounded-xl"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  {language === 'en' ? 'Copy Phone' : 'Copier Numéro'}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="cta-button border-2 border-border text-foreground hover:bg-secondary px-8 py-4 text-lg font-bold rounded-xl"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  {language === 'en' ? 'Copy Email' : 'Copier Email'}
                </Button>
              </div>
              
              {/* Contact Info Display */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <p className="text-foreground text-base font-medium">
                      📞 <span className="font-bold">+33 6 62 48 15 30</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
                    <p className="text-foreground text-base font-medium">
                      ✉️ <span className="font-bold">contact@nearqube.com</span>
                    </p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  {language === 'en' ? 'Click buttons above to copy contact information' : 'Cliquez sur les boutons pour copier les informations de contact'}
                </div>
              </div>
            </div>
            
            {/* Right Content - Tech Visual */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Modern Tech Grid */}
                <div className="relative w-80 h-60 lg:w-96 lg:h-72">
                  {/* Main Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary rounded-3xl shadow-2xl border border-border/50 backdrop-blur-xl">
                    {/* Tech Grid Pattern */}
                    <div className="absolute inset-4 grid grid-cols-6 grid-rows-4 gap-2">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-lg ${
                            i % 7 === 0 ? 'bg-primary/20' : 
                            i % 5 === 0 ? 'bg-accent/20' : 
                            i % 3 === 0 ? 'bg-warning/20' :
                            'bg-muted/60'
                          } animate-pulse`}
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '2s'
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Central Glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating tech elements */}
                <div className="absolute -top-6 -left-6 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-accent/50 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 -right-8 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-500"></div>
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