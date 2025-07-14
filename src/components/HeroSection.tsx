
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
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%),
          linear-gradient(45deg, hsl(220 70% 50% / 0.1) 0%, hsl(200 80% 60% / 0.1) 100%),
          url('/lovable-uploads/0f576b1f-2447-4b53-b678-21b6e7e2e915.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Premium Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Morphing Glassmorphism Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 glass-morphism animate-float animate-morph opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 glass-morphism rounded-full animate-glow-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 glass-morphism rotate-12 animate-float opacity-35"></div>
        
        {/* Premium Gradient Orbs */}
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full opacity-20 animate-float" 
             style={{background: 'radial-gradient(circle, hsl(220 70% 50% / 0.4) 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full opacity-25 animate-float" 
             style={{background: 'radial-gradient(circle, hsl(200 80% 60% / 0.4) 0%, transparent 70%)'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        {/* Premium Badge */}
        <div className="inline-block glass-card rounded-full px-6 py-3 mb-8 animate-fade-in animate-glow-pulse">
          <span className="font-montserrat text-sm font-light tracking-wide text-white/90">
            ✨ Lights. Camera. Solutions ✨
          </span>
        </div>

        {/* Premium Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-montserrat font-bold mb-4 tracking-tight animate-fade-in">
          Excellence in
        </h1>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-montserrat font-bold mb-8 tracking-tight gradient-text animate-fade-in">
          Media Production
        </h2>

        {/* Premium Sub Slogan */}
        <p className="text-lg sm:text-xl md:text-2xl font-montserrat font-light mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in text-white/90">
          Seamless Event Live Streaming Jamaica & Cinematic Coverage Across Jamaica
        </p>

        {/* Service Area */}
        <p className="text-base sm:text-lg font-montserrat mb-12 text-blue-200/80 animate-fade-in">
          Professional Live Stream Services Jamaica - Serving St. Ann, Kingston, and beyond
        </p>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in">
          <button 
            onClick={() => scrollToSection("booking")} 
            className="glass-button px-10 py-4 rounded-full font-semibold text-lg text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Book Your Event</span>
          </button>
          <button 
            onClick={() => scrollToSection("packages")} 
            className="glass-card px-10 py-4 rounded-full font-semibold text-lg text-white/90 hover:text-white transition-all duration-300 hover:scale-105"
          >
            See Our Packages
          </button>
        </div>

        {/* Premium Contact Info */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm animate-fade-in">
          <a href="tel:+18763047551" className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105 text-white/90">
            <Phone size={16} />
            876-304-7551
          </a>
          <a href="mailto:mediasolutionsja@gmail.com" className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-105 text-white/90">
            <Mail size={16} />
            mediasolutionsja@gmail.com
          </a>
          <a href="https://wa.me/18763047551" target="_blank" rel="noopener noreferrer" className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:scale-105 text-white/90">
            <span className="text-green-400">💬</span>
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
