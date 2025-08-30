import { 
  Code, 
  Database, 
  BarChart3, 
  Cloud, 
  Settings 
} from "lucide-react"
import { translations } from "@/lib/translations"

interface ServicesSectionProps {
  language: 'en' | 'fr'
}

const serviceIcons = {
  it: Code,
  sap: Settings,
  data: BarChart3,
  software: Code,
  cloud: Cloud
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language]

  return (
    <section className="section-spacing tech-section bg-secondary/50">
      <div className="mobile-container">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="text-accent text-sm font-semibold tracking-wide uppercase">Our Expertise</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight">
            {t.services.title}
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-20 lg:mb-24 max-w-5xl mx-auto leading-relaxed font-light">
            {t.services.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {t.services.items.map((service, index) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons]
              
              return (
                <div
                  key={index}
                  className="service-card p-10 lg:p-12 rounded-3xl border border-border/50 hover:border-accent/30 group text-center"
                >
                  <div className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/5 mb-10 group-hover:from-accent/20 group-hover:to-primary/10 transition-all duration-500 mx-auto shadow-lg">
                    <IconComponent className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-6 leading-tight tracking-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}