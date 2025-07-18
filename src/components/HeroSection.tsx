
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('/lovable-uploads/0f576b1f-2447-4b53-b678-21b6e7e2e915.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll' // Changed from fixed for better mobile support
      }}
    >
      {/* Geometric shapes overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-600/20 rotate-12 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        {/* Badge */}
        <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <span className="font-montserrat text-xs font-light tracking-wide text-slate-50">
            Lights. Camera. Solutions
          </span>
        </div>

        {/* Main Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-montserrat font-bold mb-4 tracking-tight animate-fade-in">Excellence in</h1>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-montserrat font-bold mb-8 tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent animate-fade-in">
          Media Production
        </h2>

        {/* Sub Slogan */}
        <p className="text-lg sm:text-xl md:text-2xl font-montserrat font-light mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Seamless Event Live Streaming Jamaica & Cinematic Coverage Across Jamaica
        </p>

        {/* Service Area */}
        <p className="text-base sm:text-lg font-montserrat mb-12 text-blue-200 animate-fade-in">
          Professional Live Stream Services Jamaica - Serving St. Ann, Kingston, and beyond
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button onClick={() => scrollToSection("booking")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Book Your Event
          </Button>
          <Button onClick={() => scrollToSection("packages")} variant="outline" className="border-white hover:bg-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 text-slate-950 hover:scale-105 hover:shadow-lg">
            See Our Packages
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm animate-fade-in">
          <a href="tel:+18763047551" className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105">
            <Phone size={16} />
            876-304-7551
          </a>
          <a href="mailto:mediasolutionsja@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105">
            <Mail size={16} />
            mediasolutionsja@gmail.com
          </a>
          <a href="https://wa.me/18763047551" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:scale-105">
            <span className="text-green-400">💬</span>
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
