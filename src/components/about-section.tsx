import { translations } from "@/lib/translations"
import { Users, Target, Globe2 } from "lucide-react"

interface AboutSectionProps {
  language: 'en' | 'fr'
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language]

  const features = [
    {
      icon: Users,
      title: t.about.features.skilled.title,
      description: t.about.features.skilled.description
    },
    {
      icon: Target,
      title: t.about.features.affordable.title,
      description: t.about.features.affordable.description
    },
    {
      icon: Globe2,
      title: t.about.features.nearshore.title,
      description: t.about.features.nearshore.description
    }
  ]

  return (
    <section className="section-spacing bg-background">
      <div className="mobile-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                {t.about.title}
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
                {t.about.description}
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t.about.mission}
              </p>
            </div>
            
            {/* Features */}
            <div className="order-1 lg:order-2 space-y-8 lg:space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}