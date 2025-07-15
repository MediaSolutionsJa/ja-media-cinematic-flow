
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
      className="relative min-h-screen flex items-center justify-center text-foreground overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('/lovable-uploads/0f576b1f-2447-4b53-b678-21b6e7e2e915.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 glass opacity-20"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 gradient-accent rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-1/4 w-24 h-24 border border-primary/15 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        {/* Premium Badge */}
        <div className="inline-block glass-card rounded-full px-6 py-3 mb-8 animate-fade-in animate-glow-pulse">
          <span className="font-montserrat text-sm font-light tracking-wide text-primary glow-text">
            ✨ Lights. Camera. Solutions ✨
          </span>
        </div>

        {/* Main Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-montserrat font-bold mb-4 tracking-tight animate-fade-in glow-text">
          Excellence in
        </h1>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-montserrat font-bold mb-8 tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in animate-shimmer">
          Media Production
        </h2>

        {/* Sub Slogan */}
        <p className="text-lg sm:text-xl md:text-2xl font-montserrat font-light mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in text-foreground/90">
          Seamless Event Live Streaming Jamaica & Cinematic Coverage Across Jamaica
        </p>

        {/* Service Area */}
        <p className="text-base sm:text-lg font-montserrat mb-12 text-primary/80 animate-fade-in">
          Professional Live Stream Services Jamaica - Serving St. Ann, Kingston, and beyond
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            onClick={() => scrollToSection("booking")} 
            className="gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg animate-glow-pulse"
          >
            Book Your Event
          </Button>
          <Button 
            onClick={() => scrollToSection("packages")} 
            variant="outline" 
            className="glass-card border-primary/30 hover:bg-primary/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-foreground hover:scale-105 hover:shadow-glow"
          >
            See Our Packages
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm animate-fade-in">
          <a href="tel:+18763047551" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 hover:glow-text glass-card px-4 py-2 rounded-full">
            <Phone size={16} />
            876-304-7551
          </a>
          <a href="mailto:mediasolutionsja@gmail.com" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 hover:glow-text glass-card px-4 py-2 rounded-full">
            <Mail size={16} />
            mediasolutionsja@gmail.com
          </a>
          <a href="https://wa.me/18763047551" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 hover:glow-text glass-card px-4 py-2 rounded-full">
            <span className="text-primary">💬</span>
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
