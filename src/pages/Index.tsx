import { useState } from 'react'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Phone, Mail } from 'lucide-react'

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en')

  return (
    <div className="min-h-screen bg-background">
      {/* Language Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle 
          language={language} 
          onLanguageChange={setLanguage}
        />
      </div>

      {/* Hero Section */}
      <main>
        <HeroSection language={language} />
        
        {/* Services Section */}
        <ServicesSection language={language} />
        
        {/* About Section */}
        <AboutSection language={language} />
        
        {/* Contact Section */}
        <ContactSection language={language} />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 lg:py-20 tech-section">
        <div className="mobile-container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">NearQube</h3>
            <p className="text-primary-foreground/90 mb-10 text-lg lg:text-xl leading-relaxed">
              Connecting businesses with skilled nearshore consultants
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center text-base lg:text-lg">
              <span className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +33 6 62 48 15 30
              </span>
              <span className="hidden sm:block text-primary-foreground/60">•</span>
              <span className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                contact@nearqube.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
