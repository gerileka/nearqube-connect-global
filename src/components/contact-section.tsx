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
          
          {/* Success Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Story 1 */}
            <div className="service-card p-8 lg:p-10 rounded-3xl border border-border/50 bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-6">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 animate-pulse">
                  <div className="w-6 h-6 rounded-full bg-accent/40"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Laurent D.</h4>
                  <p className="text-sm text-muted-foreground">SAP Operations Manager</p>
                </div>
              </div>
              
              <blockquote className="text-base lg:text-lg text-foreground mb-6 leading-relaxed italic">
                "Working with NearQube's nearshore consultants was a game-changer. We reduced costs by 35% while maintaining the same high-quality expertise."
              </blockquote>
              
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-lg bg-background/50">
                  <div className="text-xl font-bold text-accent mb-1">35%</div>
                  <div className="text-xs text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="p-3 rounded-lg bg-background/50">
                  <div className="text-xl font-bold text-accent mb-1">6mo</div>
                  <div className="text-xs text-muted-foreground">Timeline</div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="service-card p-8 lg:p-10 rounded-3xl border border-border/50 bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-6">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 animate-pulse">
                  <div className="w-6 h-6 rounded-full bg-accent/40"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Marie C.</h4>
                  <p className="text-sm text-muted-foreground">IT Director</p>
                </div>
              </div>
              
              <blockquote className="text-base lg:text-lg text-foreground mb-6 leading-relaxed italic">
                "The nearshore team's expertise exceeded our expectations. We saved 40% on consulting fees without compromising on delivery quality or timelines."
              </blockquote>
              
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-lg bg-background/50">
                  <div className="text-xl font-bold text-accent mb-1">40%</div>
                  <div className="text-xs text-muted-foreground">Savings</div>
                </div>
                <div className="p-3 rounded-lg bg-background/50">
                  <div className="text-xl font-bold text-accent mb-1">3mo</div>
                  <div className="text-xs text-muted-foreground">Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story 3 - Featured */}
          <div className="service-card p-10 lg:p-16 rounded-3xl border border-border/50 bg-gradient-to-br from-accent/5 to-accent/10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 animate-pulse">
                <div className="w-8 h-8 rounded-full bg-accent/40"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Thomas R.</h4>
                <p className="text-muted-foreground">CTO</p>
              </div>
            </div>
            
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-foreground mb-8 leading-relaxed italic text-center sm:text-left">
              "NearQube's nearshore consultants brought enterprise-level expertise at startup-friendly prices. We achieved a 45% cost reduction while accelerating our digital transformation by 2x."
            </blockquote>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="p-4 rounded-xl bg-background/50">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">45%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">2x</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Faster Delivery</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}