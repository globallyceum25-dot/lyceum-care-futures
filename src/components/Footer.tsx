import { Mail, Phone, MapPin, Globe, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const lyceumLogoUrl = "/lovable-uploads/a0d21212-ac82-4254-99f4-0fbc32d5d818.png";

const Footer = () => {
  const branches = [
    { name: "Nugegoda", type: "Day Care", address: "14/8 Pietersz Pl, Nugegoda" },
    { name: "Kurunegala", type: "After School" },
    { name: "Panadura", type: "After School" },
    { name: "Anuradhapura", type: "After School" },
    { name: "Avissawella", type: "After School" },
    { name: "Wattala", type: "After School" },
    { name: "Kohuwala", type: "After School" },
    { name: "Ratnapura", type: "After School" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src={lyceumLogoUrl} 
                alt="Lyceum Day Care Logo" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-muted-foreground leading-relaxed">
                Creating a safe, nurturing, and educational environment for children across Sri Lanka.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm text-foreground">011 738 5000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-sm text-foreground">student_admissions@lyceum.lk</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-secondary" />
                <span className="text-sm text-foreground">www.lyceum.lk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto text-muted-foreground hover:text-secondary hover:bg-transparent"
                onClick={() => scrollToSection('about')}
              >
                About Us
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto text-muted-foreground hover:text-secondary hover:bg-transparent"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto text-muted-foreground hover:text-secondary hover:bg-transparent"
                onClick={() => scrollToSection('branches')}
              >
                Branches
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto text-muted-foreground hover:text-secondary hover:bg-transparent"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Branches */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-secondary">Our Branches</h4>
            <div className="space-y-2">
              {branches.slice(0, 6).map((branch, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{branch.name}</span>
                  <span className="text-secondary ml-2">({branch.type})</span>
                </div>
              ))}
              <div className="text-sm text-muted-foreground">
                + {branches.length - 6} more locations
              </div>
            </div>
          </div>

          {/* Main Branch & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-secondary">Main Branch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium text-foreground">Lyceum Day Care</div>
                  <div>14/8 Pietersz Pl, Nugegoda</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-secondary">Follow Us</h5>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-muted-foreground hover:text-secondary hover:bg-secondary/20"
                  asChild
                >
                  <a 
                    href="https://www.facebook.com/lyceumdaycare/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-muted-foreground hover:text-secondary hover:bg-secondary/20"
                  asChild
                >
                  <a 
                    href="https://www.instagram.com/lyceum_daycare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Lyceum Day Care. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Providing quality child care across Sri Lanka since 2014
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;