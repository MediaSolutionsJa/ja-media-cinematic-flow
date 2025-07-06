
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    if (location.pathname === '/') {
      scrollToSection("booking");
    } else {
      window.location.href = "/#booking";
    }
  };

  return (
    <>
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
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f39eac11-6112-488d-a596-eea0f6892264.png" 
                alt="Media Solutions JA Logo - Professional Live Stream Services Jamaica" 
                className="h-8 w-auto"
              />
              <span className="text-white font-montserrat font-semibold text-lg leading-tight">
                Media Solutions JA
              </span>
            </Link>

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
              <Link 
                to="/affiliate"
                className="text-white text-sm hover:text-blue-400 transition-colors py-2"
              >
                Affiliate Program
              </Link>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-white text-sm hover:text-blue-400 transition-colors py-2"
              >
                Contact
              </button>
            </div>

            {/* Right - CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleBookingClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 animate-pulse"
                style={{
                  animationDuration: '2s',
                  animationIterationCount: 'infinite',
                }}
              >
                Book Now
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed top-[60px] left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-black/95 backdrop-blur-md mx-4 rounded-2xl shadow-2xl border border-white/10">
          <div className="py-6 px-6 space-y-4">
            <button 
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-white text-lg hover:text-blue-400 transition-colors py-3 border-b border-white/10"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("packages")}
              className="block w-full text-left text-white text-lg hover:text-blue-400 transition-colors py-3 border-b border-white/10"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-white text-lg hover:text-blue-400 transition-colors py-3 border-b border-white/10"
            >
              Gallery
            </button>
            <Link 
              to="/affiliate"
              className="block w-full text-left text-white text-lg hover:text-blue-400 transition-colors py-3 border-b border-white/10"
            >
              Affiliate Program
            </Link>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-white text-lg hover:text-blue-400 transition-colors py-3"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
