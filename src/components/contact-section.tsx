import { Button } from "@/components/ui/button"
import { Phone, Mail, ExternalLink } from "lucide-react"
import { translations } from "@/lib/translations"

interface ContactSectionProps {
  language: 'en' | 'fr'
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language]

  const handleTallyForm = () => {
    // Will be updated with actual Tally URL
    console.log('Redirect to Tally form')
  }

  const handlePhoneCall = () => {
    window.open('tel:+33662481530', '_self')
  }

  const handleEmail = () => {
    window.open('mailto:contact@nearqube.com', '_self')
  }

  return (
    <section className="section-spacing tech-section bg-gradient-to-b from-secondary/50 to-background">
      <div className="mobile-container">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            {t.contact.title}
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-16 lg:mb-20 max-w-4xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {/* Phone */}
            <div 
              onClick={handlePhoneCall}
              className="service-card p-8 lg:p-10 rounded-2xl border border-border/50 hover:border-accent/30 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-8 group-hover:bg-accent/20 transition-all duration-300 mx-auto">
                <Phone className="h-10 w-10 text-accent" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                {t.contact.phone.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.contact.phone.description}
              </p>
              
              <p className="text-lg lg:text-xl font-bold text-accent">
                +33 6 62 48 15 30
              </p>
            </div>
            
            {/* Email */}
            <div 
              onClick={handleEmail}
              className="service-card p-8 lg:p-10 rounded-2xl border border-border/50 hover:border-accent/30 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-8 group-hover:bg-accent/20 transition-all duration-300 mx-auto">
                <Mail className="h-10 w-10 text-accent" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                {t.contact.email.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.contact.email.description}
              </p>
              
              <p className="text-lg lg:text-xl font-bold text-accent">
                contact@nearqube.com
              </p>
            </div>
          </div>
          
          {/* Tally Form CTA */}
          <div className="service-card p-10 lg:p-16 rounded-3xl border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {t.contact.form.title}
            </h3>
            
            <p className="text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-lg">
              {t.contact.form.description}
            </p>
            
            <Button
              size="lg"
              onClick={handleTallyForm}
              className="cta-button bg-accent hover:bg-accent-dark text-accent-foreground px-10 py-4 text-lg font-bold shadow-2xl"
            >
              {t.contact.form.button}
              <ExternalLink className="h-6 w-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}