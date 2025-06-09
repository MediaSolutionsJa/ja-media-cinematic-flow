
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('/lovable-uploads/baddb3fd-fdcc-4247-ba0e-52b1bb3e627f.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Geometric shapes overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rotate-45"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-600/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
          <span className="text-blue-300 font-montserrat text-xs font-light tracking-wide">
            Lights. Camera. Solutions
          </span>
        </div>

        {/* Main Headlines */}
        <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-4 tracking-tight">
          Excellence in
        </h1>
        <h2 className="text-6xl md:text-8xl font-montserrat font-bold mb-8 text-blue-400 tracking-tight">
          Media Production
        </h2>

        {/* Sub Slogan */}
        <p className="text-xl md:text-2xl font-montserrat font-light mb-4 max-w-4xl mx-auto leading-relaxed">
          Seamless Live Streaming & Cinematic Coverage Across Jamaica
        </p>

        {/* Service Area */}
        <p className="text-lg font-montserrat mb-12 text-blue-200">
          Serving St. Ann, Kingston, and beyond
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => scrollToSection("booking")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Book Your Event
          </Button>
          <Button 
            onClick={() => scrollToSection("packages")}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
          >
            See Our Packages
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <a 
            href="tel:+18763047551" 
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Phone size={16} />
            876-304-7551
          </a>
          <a 
            href="mailto:mediasolutionsja@gmail.com" 
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={16} />
            mediasolutionsja@gmail.com
          </a>
          <a 
            href="https://wa.me/18763047551" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <span className="text-green-400">💬</span>
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
