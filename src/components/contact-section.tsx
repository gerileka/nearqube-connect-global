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
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="text-accent text-sm font-semibold tracking-wide uppercase">Get in Touch</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight">
            {t.contact.title}
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-20 lg:mb-24 max-w-5xl mx-auto leading-relaxed font-light">
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
          
          {/* Success Story */}
          <div className="service-card p-10 lg:p-16 rounded-3xl border border-border/50 bg-gradient-to-br from-accent/5 to-accent/10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-accent">LD</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Laurent Dubois</h4>
                <p className="text-muted-foreground">SAP Operations Manager, TechCorp Solutions</p>
              </div>
            </div>
            
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-foreground mb-8 leading-relaxed italic text-center sm:text-left">
              "NearQube helped us optimize our SAP infrastructure and reduce operational costs by 35% within 6 months. Their expertise in S/4HANA migration was exceptional."
            </blockquote>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="p-4 rounded-xl bg-background/50">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">35%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Months Timeline</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}