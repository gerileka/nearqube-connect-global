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
          <div className="text-center mb-20">
            <div className="mb-6">
              <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">About Us</span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight">
              {t.about.title}
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              {t.about.description}
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {t.about.mission}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content moved above */}
            <div className="order-2 lg:order-1">
              {/* Content is now in centered section above */}
            </div>
            
            {/* Features Grid */}
            <div className="col-span-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="service-card p-8 lg:p-10 rounded-3xl text-center group">
                    <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/5 mb-8 mx-auto group-hover:from-accent/20 group-hover:to-primary/10 transition-all duration-500 shadow-lg">
                      <feature.icon className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-4 leading-tight tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}