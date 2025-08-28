import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Users, Award } from "lucide-react";

const activitiesImageUrl = "/lovable-uploads/a2ac8c02-ec15-42c2-9ec7-6ea72ad96670.png";

const About = () => {
  const stats = [
    { icon: MapPin, label: "Branches", value: "8", description: "Across Sri Lanka" },
    { icon: Users, label: "Happy Children", value: "500+", description: "In our care" },
    { icon: Heart, label: "Years of Care", value: "10+", description: "Experience" },
    { icon: Award, label: "Qualified Staff", value: "100%", description: "Certified teachers" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Creating a{" "}
            <span className="text-primary">Home Away from Home</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Lyceum Day Care and After School Care, we believe in creating a nurturing environment 
            where children can learn, grow, and thrive while giving parents complete peace of mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Where Learning Meets Fun
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our programs are thoughtfully designed to support every aspect of your child's development. 
              From creative activities and educational play to quiet rest time and homework support, 
              we provide a balanced environment that promotes both learning and well-being.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experienced, qualified staff and modern facilities, we ensure your child receives 
              the attention, care, and guidance they deserve in a safe and loving environment.
            </p>
          </div>
          
          <div className="relative">
            <img
              src={activitiesImageUrl}
              alt="Children engaged in educational activities"
              className="rounded-2xl shadow-primary w-full h-[400px] object-cover"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center animate-bounce-soft">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;