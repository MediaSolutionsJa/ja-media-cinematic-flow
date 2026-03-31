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
        backgroundImage:
          "linear-gradient(120deg, rgba(7,10,18,0.88), rgba(15,20,33,0.74)), url('/lovable-uploads/0f576b1f-2447-4b53-b678-21b6e7e2e915.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_85%_35%,rgba(59,130,246,0.2),transparent_40%)]" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl pt-20">
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <span className="font-montserrat text-xs font-medium tracking-wide text-slate-100">Lights. Camera. Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-montserrat font-bold mb-5 tracking-tight animate-fade-in">
          Excellence in <span className="text-amber-300">Media Production</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-montserrat font-light mb-3 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Seamless Event Live Streaming Jamaica & Cinematic Coverage Across Jamaica
        </p>

        <p className="text-base sm:text-lg font-montserrat mb-10 text-slate-200 animate-fade-in">
          Professional Live Stream Services Jamaica - Serving St. Ann, Kingston, and beyond
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in">
          <Button
            onClick={() => scrollToSection("booking")}
            className="bg-amber-400 hover:bg-amber-300 text-[#121827] px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Your Event
          </Button>
          <Button
            onClick={() => scrollToSection("packages")}
            variant="outline"
            className="border-white/70 hover:bg-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 text-white hover:text-[#101623] hover:scale-105 hover:shadow-lg"
          >
            See Our Packages
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10 text-sm">
          <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">Live Streaming</div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">Videography & Photography</div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">Drone & Event Production</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-sm animate-fade-in">
          <a href="tel:+18763047551" className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300">
            <Phone size={16} />
            876-304-7551
          </a>
          <a href="mailto:mediasolutionsja@gmail.com" className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300">
            <Mail size={16} />
            mediasolutionsja@gmail.com
          </a>
          <a href="https://wa.me/18763047551" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-300 transition-all duration-300">
            <span className="text-green-300">💬</span>
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
