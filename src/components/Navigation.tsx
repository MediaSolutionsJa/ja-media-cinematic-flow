
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "top-2" : "top-0"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md rounded-full mt-2" : "bg-transparent"
      }`}>
        <div className="flex items-center justify-between h-[46px] px-6">
          {/* Left - Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f39eac11-6112-488d-a596-eea0f6892264.png" 
              alt="Media Solutions JA Logo" 
              className="h-8 w-auto"
            />
            <span className="text-white font-montserrat font-semibold text-lg">
              Media Solutions JA
            </span>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-white text-sm hover:text-blue-400 transition-colors py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("packages")}
              className="text-white text-sm hover:text-blue-400 transition-colors py-2"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="text-white text-sm hover:text-blue-400 transition-colors py-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-white text-sm hover:text-blue-400 transition-colors py-2"
            >
              Contact
            </button>
          </div>

          {/* Right - CTA Button */}
          <Button 
            onClick={() => scrollToSection("booking")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 animate-pulse"
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
