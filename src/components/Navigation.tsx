
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
          isScrolled ? "glass-nav rounded-full mt-2" : "glass-nav"
        }`}>
          <div className="flex items-center justify-between h-[46px] px-6">
            {/* Left - Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f39eac11-6112-488d-a596-eea0f6892264.png" 
                alt="Media Solutions JA Logo - Professional Live Stream Services Jamaica" 
                className="h-8 w-auto"
              />
              <span className="text-foreground font-montserrat font-semibold text-lg leading-none glow-text">
                Media Solutions JA
              </span>
            </Link>

            {/* Center - Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("packages")}
                className="text-foreground/80 text-sm hover:text-primary transition-all duration-300 py-2 hover:glow-text"
              >
                Packages
              </button>
              <Link 
                to="/our-work"
                className="text-foreground/80 text-sm hover:text-primary transition-all duration-300 py-2 hover:glow-text"
              >
                Our Work
              </Link>
              <Link 
                to="/wedding"
                className="text-foreground/80 text-sm hover:text-primary transition-all duration-300 py-2 hover:glow-text"
              >
                Wedding
              </Link>
              <Link 
                to="/affiliate"
                className="text-foreground/80 text-sm hover:text-primary transition-all duration-300 py-2 hover:glow-text"
              >
                Affiliate Program
              </Link>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 text-sm hover:text-primary transition-all duration-300 py-2 hover:glow-text"
              >
                Contact
              </button>
            </div>

            {/* Right - CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleBookingClick}
                className="gradient-primary text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 animate-glow-pulse shadow-glow hover:shadow-glow-lg"
              >
                Book Now
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-foreground p-2 hover:bg-primary/20 rounded-full transition-all duration-300 glass-card"
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
        <div className="glass-card mx-4 rounded-2xl shadow-glass-lg border border-glass-border/20">
          <div className="py-6 px-6 space-y-4">
            <button 
              onClick={() => scrollToSection("packages")}
              className="block w-full text-left text-foreground text-lg hover:text-primary transition-all duration-300 py-3 border-b border-glass-border/20 hover:glow-text"
            >
              Packages
            </button>
            <Link 
              to="/our-work"
              className="block w-full text-left text-foreground text-lg hover:text-primary transition-all duration-300 py-3 border-b border-glass-border/20 hover:glow-text"
            >
              Our Work
            </Link>
            <Link 
              to="/wedding"
              className="block w-full text-left text-foreground text-lg hover:text-primary transition-all duration-300 py-3 border-b border-glass-border/20 hover:glow-text"
            >
              Wedding
            </Link>
            <Link 
              to="/affiliate"
              className="block w-full text-left text-foreground text-lg hover:text-primary transition-all duration-300 py-3 border-b border-glass-border/20 hover:glow-text"
            >
              Affiliate Program
            </Link>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground text-lg hover:text-primary transition-all duration-300 py-3 hover:glow-text"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
