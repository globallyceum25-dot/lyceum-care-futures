import Hero from "@/components/Hero";
import About from "@/components/About";
import Branches from "@/components/Branches";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Branches />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
