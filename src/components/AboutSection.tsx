import { useState } from "react";
import { Camera, Globe, Handshake, Smile, Trophy } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState<{ title: string; description: string } | null>(null);

  const features = [
    {
      icon: Camera,
      title: "Memory Preservation",
      description: "We don't just capture moments, we help you preserve memories that last a lifetime.",
      detail:
        "From ceremony highlights to complete event documentation, our teams focus on preserving emotional, meaningful moments with clarity and care.",
    },
    {
      icon: Globe,
      title: "Enhanced Visibility",
      description: "We boost your brand's presence through professional, high-impact visuals.",
      detail:
        "For organizations and businesses, we create polished media outputs that improve audience perception and professional credibility.",
    },
    {
      icon: Handshake,
      title: "Reliable Partnership",
      description: "Count on us for dependable service from start to finish.",
      detail:
        "We keep communication clear, timelines realistic, and production expectations aligned so clients feel confident at every stage.",
    },
    {
      icon: Smile,
      title: "Friendly Service",
      description: "Our team is approachable, courteous, and easy to work with.",
      detail:
        "We prioritize a respectful and calm client experience, especially for emotional events where sensitivity matters most.",
    },
    {
      icon: Trophy,
      title: "Driven by Excellence",
      description: "We continuously strive to exceed expectations in every project.",
      detail:
        "Our standards are built on consistency, detail, and quality control to ensure every production reflects a premium result.",
    },
  ];

  return (
    <>
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-gray-900">🎥 About Media Solutions JA</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Media Solutions JA, we're not just a camera crew — we're storytellers committed to quality, care, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
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
                <p className="text-blue-600 font-semibold text-lg">Let's capture your next big moment — Live & Unforgettable.</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/898b3f9f-54a6-436d-804a-76ccd2dfd0a1.png"
                alt="Professional live streaming equipment for event live streaming Jamaica"
                className="rounded-2xl shadow-2xl border border-slate-200"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-montserrat font-bold mb-3 text-center text-gray-900">What Makes Us Different</h3>
            <p className="text-center text-gray-600 mb-10">Tap any card to see how we apply this in real productions.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <button
                  key={feature.title}
                  onClick={() => setActiveFeature({ title: feature.title, description: feature.detail })}
                  className="text-left bg-white border border-slate-200 p-7 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <feature.icon className="w-11 h-11 text-blue-600 mb-4" />
                  <h4 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!activeFeature} onOpenChange={(open) => !open && setActiveFeature(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{activeFeature?.title}</DialogTitle>
            <DialogDescription className="pt-2 text-base leading-relaxed text-gray-600">{activeFeature?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutSection;
