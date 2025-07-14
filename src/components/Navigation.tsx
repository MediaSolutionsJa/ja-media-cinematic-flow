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
        element.scrollIntoView({
          behavior: "smooth"
        });
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
  return <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "top-2" : "top-0"}`}>
        <div className={`mx-auto max-w-6xl px-4 transition-all duration-500 ${isScrolled ? "glass-card rounded-full mt-2 animate-glow-pulse" : "glass-morphism"}`}>
          <div className="flex items-center justify-between h-[46px] px-6">
            {/* Left - Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/lovable-uploads/f39eac11-6112-488d-a596-eea0f6892264.png" alt="Media Solutions JA Logo - Professional Live Stream Services Jamaica" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-white font-montserrat font-semibold text-lg leading-none gradient-text">
                Media Solutions JA
              </span>
            </Link>

            {/* Center - Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("packages")} className="text-white/90 text-sm hover:text-white transition-all duration-300 hover:scale-105 py-2">
                Packages
              </button>
              <Link to="/our-work" className="text-white/90 text-sm hover:text-white transition-all duration-300 hover:scale-105 py-2">
                Our Work
              </Link>
              <Link to="/wedding" className="text-white/90 text-sm hover:text-white transition-all duration-300 hover:scale-105 py-2">
                Wedding
              </Link>
              <Link to="/affiliate" className="text-white/90 text-sm hover:text-white transition-all duration-300 hover:scale-105 py-2">
                Affiliate Program
              </Link>
              <button onClick={() => scrollToSection("contact")} className="text-white/90 text-sm hover:text-white transition-all duration-300 hover:scale-105 py-2">
                Contact
              </button>
            </div>

            {/* Right - CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button onClick={handleBookingClick} className="glass-button rounded-full font-medium text-white animate-glow-pulse py-0 px-[18px] mx-[4px] my-0">
                Book Now
              </button>
              
              {/* Mobile Menu Button */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2 glass-morphism rounded-full transition-all duration-300 hover:scale-105" aria-label="Toggle mobile menu">
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Dropdown Menu */}
      <div className={`fixed top-[60px] left-0 right-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="glass-card mx-4 rounded-2xl animate-scale-in">
          <div className="py-6 px-6 space-y-4">
            <button onClick={() => scrollToSection("packages")} className="block w-full text-left text-white/90 text-lg hover:text-white transition-all duration-300 hover:scale-105 py-3 border-b border-white/10">
              Packages
            </button>
            <Link to="/our-work" className="block w-full text-left text-white/90 text-lg hover:text-white transition-all duration-300 hover:scale-105 py-3 border-b border-white/10">
              Our Work
            </Link>
            <Link to="/wedding" className="block w-full text-left text-white/90 text-lg hover:text-white transition-all duration-300 hover:scale-105 py-3 border-b border-white/10">
              Wedding
            </Link>
            <Link to="/affiliate" className="block w-full text-left text-white/90 text-lg hover:text-white transition-all duration-300 hover:scale-105 py-3 border-b border-white/10">
              Affiliate Program
            </Link>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-white/90 text-lg hover:text-white transition-all duration-300 hover:scale-105 py-3">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden animate-fade-in" onClick={() => setIsMobileMenuOpen(false)} />}
    </>;
};
export default Navigation;