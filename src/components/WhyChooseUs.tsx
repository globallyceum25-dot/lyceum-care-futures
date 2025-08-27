import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Shield, 
  Users, 
  MapPin, 
  Heart, 
  BookOpen,
  Clock,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Experienced, Qualified Staff",
      description: "Our team consists of certified teachers and caregivers with years of experience in child development and education.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Shield,
      title: "Safe and Caring Environment",
      description: "We maintain the highest safety standards while creating a warm, nurturing atmosphere where children feel secure and loved.",
      gradient: "from-accent to-accent-light"
    },
    {
      icon: Users,
      title: "Balanced Learning & Play",
      description: "Our programs perfectly balance educational activities with creative play, ensuring holistic development for every child.",
      gradient: "from-secondary to-secondary-light"
    },
    {
      icon: MapPin,
      title: "Conveniently Located",
      description: "With 8 branches across Sri Lanka, we're easily accessible to families in multiple communities and regions.",
      gradient: "from-success to-success"
    },
    {
      icon: Heart,
      title: "Individual Attention",
      description: "We maintain small group sizes to ensure each child receives personalized care and attention throughout their day.",
      gradient: "from-primary to-accent"
    },
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "Our curriculum includes speech & drama, creative arts, and academic support to foster comprehensive learning.",
      gradient: "from-accent to-secondary"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "From full-time day care to after-school programs, we offer flexible options to meet your family's unique needs.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Star,
      title: "Proven Track Record",
      description: "With over 10 years of service and 500+ happy families, we have a proven track record of excellence in child care.",
      gradient: "from-success to-accent"
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-primary">Lyceum Day Care?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a day care - we're your partners in raising happy, confident, 
            and well-rounded children who are ready for life's adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="h-full border-0 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Happy Families</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">10+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">100%</div>
              <div className="text-muted-foreground">Qualified Staff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;