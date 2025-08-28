import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  GraduationCap, 
  Utensils, 
  Car, 
  Thermometer, 
  Music, 
  BookOpen, 
  Shield,
  Clock,
  Heart,
  Users,
  Zap
} from "lucide-react";

const careImageUrl = "/lovable-uploads/488bb204-70cf-4af9-bc4c-0ab220ed6643.png";

const Services = () => {
  const dayCareFeatures = [
    { icon: Home, title: "Separate Areas", description: "Dedicated sleeping, dining, and play areas" },
    { icon: Thermometer, title: "Air Conditioned", description: "Climate-controlled sleeping areas for comfort" },
    { icon: Clock, title: "Full Time Care", description: "Complete care facility throughout the day" },
    { icon: GraduationCap, title: "Speech & Drama", description: "Engaging classes for student development" },
    { icon: Music, title: "Dancing Classes", description: "Free creative movement and dance sessions" },
    { icon: Car, title: "Transport Service", description: "Pick up from LIS and drop off service" },
    { icon: Utensils, title: "Food Facilities", description: "Food warming and storing capabilities" },
    { icon: Thermometer, title: "Hot Water", description: "Safe hot water facility available" },
    { icon: BookOpen, title: "Homework Support", description: "Dedicated time and help for school work" }
  ];

  const afterSchoolFeatures = [
    { icon: Users, title: "Shared Facilities", description: "Activity, dining, and sleeping areas with school" },
    { icon: Clock, title: "Flexible Hours", description: "After school care + full time during holidays" },
    { icon: Utensils, title: "Food Services", description: "Food warming and storing facilities" },
    { icon: Thermometer, title: "Hot Water", description: "Hot water facility for hygiene needs" },
    { icon: BookOpen, title: "Homework Support", description: "Dedicated homework assistance" },
    { icon: Zap, title: "Affordable Fees", description: "Budget-friendly fee structure for families" },
    { icon: Shield, title: "Safe Environment", description: "Secure and monitored care environment" }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care solutions designed for different needs and age groups
          </p>
        </div>

        <Tabs defaultValue="daycare" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="daycare" className="text-lg py-3">
              <Home className="w-5 h-5 mr-2" />
              Day Care (Nugegoda)
            </TabsTrigger>
            <TabsTrigger value="afterschool" className="text-lg py-3">
              <GraduationCap className="w-5 h-5 mr-2" />
              After School Care
            </TabsTrigger>
          </TabsList>

          <TabsContent value="daycare" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Comprehensive Day Care
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our flagship Nugegoda branch offers complete day care services with specialized facilities 
                  designed to provide the best care for your little ones from morning to evening.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default" className="bg-primary">Full Day Care</Badge>
                  <Badge variant="secondary">Educational Programs</Badge>
                  <Badge variant="outline" className="border-accent text-accent-foreground">Transport Service</Badge>
                </div>
              </div>
              <div className="relative">
                <img
                  src={careImageUrl}
                  alt="Day care facilities"
                  className="rounded-2xl shadow-primary w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayCareFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="afterschool" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                After School Care Programs
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Available across all our branches, our after school care provides a safe and nurturing 
                environment for school-age children with flexible scheduling and comprehensive support.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                <Badge variant="default" className="bg-accent">7 Locations</Badge>
                <Badge variant="secondary">Flexible Hours</Badge>
                <Badge variant="outline" className="border-success text-success">Affordable</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {afterSchoolFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3">
                      <feature.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;