import { Button } from "@/components/ui/button";

const heroImageUrl = "/lovable-uploads/dc4a70ce-28a7-4c9e-87af-531dc50e7d4b.png";

const lyceumLogoUrl = "/lovable-uploads/a0d21212-ac82-4254-99f4-0fbc32d5d818.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="Happy children learning at Lyceum Day Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <img 
              src={lyceumLogoUrl} 
              alt="Lyceum Day Care Logo" 
              className="h-24 md:h-32 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-bounce-soft">
            Trusted Care,{" "}
            <span className="text-secondary drop-shadow-lg">Bright Futures</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed font-montserrat">
            Providing safe, nurturing, and educational care for your little ones across Sri Lanka
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="animate-bounce-soft shadow-warm"
            >
              Join Our Waitlist
            </Button>
            
            <Button 
              variant="outline-light"
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-soft"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-32 right-20 w-12 h-12 bg-accent/20 rounded-full animate-bounce-soft" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-success/30 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
    </section>
  );
};

export default Hero;