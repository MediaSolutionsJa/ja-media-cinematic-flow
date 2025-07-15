
import { Check, Video, Zap, Users, Eye, HardDrive, Mic } from "lucide-react";

const ServicesSection = () => {
  const features = [
    { icon: Video, text: "HD/4K Quality – Crystal-clear video resolution" },
    { icon: Zap, text: "Multi-Camera Setup – Dynamic angles for full coverage" },
    { icon: Video, text: "Drone Integration – Aerial shots that elevate your event" },
    { icon: Eye, text: "Online Viewing – Streamed live for remote audiences" },
    { icon: HardDrive, text: "Backup Recording – Never miss a moment — recorded safely" },
    { icon: Mic, text: "Remote Speaker – Seamless integration for virtual presenters" }
  ];

  const eventTypes = [
    "Corporate Events",
    "Weddings", 
    "Funerals",
    "Conferences",
    "Church Services",
    "School Events"
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-foreground animate-fade-in glow-text">
            Elevate Your Event with Ultra-HD Live Streaming
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            From intimate ceremonies by the Ocho Rios shore to grand conferences in Kingston halls, our crews ensure crisp, seamless streaming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Key Features */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-montserrat font-bold mb-8 text-foreground glow-text">Key Features</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 glass-card rounded-lg shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-glass-border/20 hover:animate-glow-pulse">
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0 animate-float" />
                  <span className="text-foreground/90 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Types */}
          <div className="animate-fade-in">
            <div className="glass-card p-8 rounded-2xl shadow-glass-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-glass-border/20 hover:animate-glow-pulse">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-foreground text-center glow-text">
                Event Types We Cover
              </h3>
              <div className="space-y-4">
                {eventTypes.map((event, index) => (
                  <div key={index} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-200">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90 font-medium">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
