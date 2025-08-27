import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star } from "lucide-react";

const Branches = () => {
  const branches = [
    {
      name: "Nugegoda",
      type: "Day Care",
      address: "14/8 Pietersz Pl, Nugegoda",
      features: ["Full Day Care", "Air Conditioned Sleeping Areas", "Transport Service", "Speech & Drama Classes"],
      isMain: true
    },
    {
      name: "Kurunegala",
      type: "After School Care",
      features: ["After School Hours", "Holiday Full Care", "Homework Support", "Affordable Fees"]
    },
    {
      name: "Panadura",
      type: "After School Care",
      features: ["After School Hours", "Holiday Full Care", "Food Facilities", "Safe Environment"]
    },
    {
      name: "Anuradhapura",
      type: "After School Care",
      features: ["After School Hours", "Holiday Full Care", "Homework Support", "Qualified Staff"]
    },
    {
      name: "Avissawella",
      type: "After School Care",
      features: ["After School Hours", "Holiday Full Care", "Food Warming", "Learning Activities"]
    },
    {
      name: "Wattala",
      type: "After School Care",
      features: ["After School Hours", "Holiday Full Care", "Safe Environment", "Caring Staff"]
    },
    {
      name: "Kohuwala",
      type: "After School Care",
      features: ["After School Hours", "Holiday Full Care", "Educational Support", "Hot Water Facility"]
    },
    {
      name: "Ratnapura",
      type: "After School Care",
      features: ["After School Hours", "Holiday Full Care", "Homework Support", "Nutritious Environment"]
    }
  ];

  return (
    <section id="branches" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Branches</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conveniently located across Sri Lanka to serve families in multiple communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <Card 
              key={index} 
              className={`h-full transition-all duration-300 hover:shadow-warm hover:-translate-y-1 border-2 ${
                branch.isMain ? 'border-primary shadow-primary' : 'border-border shadow-soft'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-foreground">{branch.name}</CardTitle>
                  {branch.isMain && (
                    <Badge variant="default" className="bg-secondary text-secondary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Main Branch
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge 
                    variant={branch.type === "Day Care" ? "default" : "secondary"}
                    className={branch.type === "Day Care" ? "bg-primary" : "bg-accent"}
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {branch.type}
                  </Badge>
                </div>

                {branch.address && (
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {branch.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;