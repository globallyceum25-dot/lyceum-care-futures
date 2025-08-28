import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const lyceumLogoUrl = "/lovable-uploads/a0d21212-ac82-4254-99f4-0fbc32d5d818.png";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={lyceumLogoUrl} 
              alt="Lyceum Day Care Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('branches')}
              className="text-foreground hover:text-primary"
            >
              Branches
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-foreground hover:text-primary"
            >
              Why Choose Us
            </Button>
            <ThemeToggle />
            <Button 
              variant="hero" 
              onClick={scrollToContact}
              className="shadow-warm"
            >
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button 
              variant="hero" 
              size="sm"
              onClick={scrollToContact}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;