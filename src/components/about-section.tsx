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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.about.title}
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.about.description}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.mission}
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 shrink-0">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
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