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
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.contact.title}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Phone */}
            <div 
              onClick={handlePhoneCall}
              className="service-card p-8 rounded-xl border border-border/50 hover:border-accent/30 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors mx-auto">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.contact.phone.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {t.contact.phone.description}
              </p>
              
              <p className="text-lg font-semibold text-accent">
                +33 6 62 48 15 30
              </p>
            </div>
            
            {/* Email */}
            <div 
              onClick={handleEmail}
              className="service-card p-8 rounded-xl border border-border/50 hover:border-accent/30 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors mx-auto">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.contact.email.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {t.contact.email.description}
              </p>
              
              <p className="text-lg font-semibold text-accent">
                contact@nearqube.com
              </p>
            </div>
          </div>
          
          {/* Tally Form CTA */}
          <div className="bg-card rounded-2xl p-12 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t.contact.form.title}
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.contact.form.description}
            </p>
            
            <Button
              size="lg"
              onClick={handleTallyForm}
              className="cta-button bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold flex items-center gap-3"
            >
              {t.contact.form.button}
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}