import { useState } from 'react'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'

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
      <HeroSection language={language} />
      
      {/* Services Section */}
      <ServicesSection language={language} />
      
      {/* About Section */}
      <AboutSection language={language} />
      
      {/* Contact Section */}
      <ContactSection language={language} />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">NearQube</h3>
          <p className="text-primary-foreground/80 mb-6">
            Connecting businesses with skilled nearshore consultants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <span>📞 +33 6 62 48 15 30</span>
            <span className="hidden sm:block">•</span>
            <span>✉️ contact@nearqube.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
