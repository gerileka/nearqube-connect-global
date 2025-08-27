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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {t.services.items.map((service, index) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons]
              
              return (
                <div
                  key={index}
                  className="service-card p-8 lg:p-10 rounded-2xl text-center group"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-8 mx-auto group-hover:bg-accent/20 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-accent" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
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