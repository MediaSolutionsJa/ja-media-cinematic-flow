
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
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
            About Media Solutions JA
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Media Solutions JA, we don't just capture moments, we craft experiences. Founded by a passionate team of creatives, technicians, and storytellers, we've become one of Jamaica's leading names in live streaming, videography, drone services, and photography.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-montserrat font-bold mb-6 text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Media Solutions JA was born out of a deep love for technology and storytelling. What started as a solo videography venture has grown into a full-service media production company serving schools, churches, conferences, weddings, corporate functions, and cultural events island-wide. We recognized the need for affordable, high-quality digital media services in Jamaica and we rose to meet that need.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/898b3f9f-54a6-436d-804a-76ccd2dfd0a1.png" 
              alt="Professional camera equipment" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-montserrat font-bold mb-12 text-center text-gray-900">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
