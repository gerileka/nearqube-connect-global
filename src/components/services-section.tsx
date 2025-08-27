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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons]
            
            return (
              <div
                key={index}
                className="service-card p-8 rounded-xl border border-border/50 hover:border-accent/30 group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}