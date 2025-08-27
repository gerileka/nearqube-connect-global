import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface LanguageToggleProps {
  language: 'en' | 'fr'
  onLanguageChange: (lang: 'en' | 'fr') => void
  className?: string
}

export function LanguageToggle({ language, onLanguageChange, className }: LanguageToggleProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-lg bg-secondary p-1">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('en')}
          className="h-8 px-3 text-xs font-medium transition-all"
        >
          EN
        </Button>
        <Button
          variant={language === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('fr')}
          className="h-8 px-3 text-xs font-medium transition-all"
        >
          FR
        </Button>
      </div>
    </div>
  )
}