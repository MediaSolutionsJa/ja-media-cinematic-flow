
import { Camera, Globe, Handshake, Smile, Trophy } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Memory Preservation",
      description: "We don't just capture moments, we help you preserve memories that last a lifetime."
    },
    {
      icon: Globe,
      title: "Enhanced Visibility",
      description: "We boost your brand's presence through professional, high-impact visuals."
    },
    {
      icon: Handshake,
      title: "Reliable Partnership",
      description: "Count on us for dependable service from start to finish."
    },
    {
      icon: Smile,
      title: "Friendly Service",
      description: "Our team is approachable, courteous, and easy to work with."
    },
    {
      icon: Trophy,
      title: "Driven by Excellence",
      description: "We continuously strive to exceed expectations in every project."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
            🎥 About Media Solutions JA
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Media Solutions JA, we're not just a camera crew — we're storytellers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16 animate-slide-left">
          <div>
            <h3 className="text-3xl font-montserrat font-bold mb-6 text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We specialize in <strong>event live streaming Jamaica</strong>, videography, drone coverage, and photography for all kinds of events — from elegant <strong>wedding live streaming Jamaica</strong> and emotional <strong>funeral live streaming Jamaica</strong> to high-powered <strong>corporate event streaming</strong> and milestone celebrations.
              </p>
              <p>
                We bring a Jamaican heartbeat to every moment we capture, combining professional-grade equipment, a dedicated creative team, and a passion for making your event unforgettable.
              </p>
              <p>
                We're proud to serve clients across the island with <strong>affordable event streaming Jamaica</strong> packages, clear communication, and real results.
              </p>
              <p className="text-blue-600 font-semibold text-lg">
                Let's capture your next big moment — Live & Unforgettable.
              </p>
            </div>
          </div>
          <div className="relative animate-slide-right">
            <img 
              src="/lovable-uploads/898b3f9f-54a6-436d-804a-76ccd2dfd0a1.png" 
              alt="Professional live streaming equipment for event live streaming Jamaica" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="animate-fade-in">
          <h3 className="text-3xl font-montserrat font-bold mb-12 text-center text-gray-900">Why Choose Media Solutions JA</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-montserrat font-semibold mb-4 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
