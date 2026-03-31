import { useState } from "react";
import { Check, Video, Zap, Users, Eye, HardDrive, Mic } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ServicesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<{ title: string; description: string } | null>(null);

  const features = [
    {
      icon: Video,
      text: "HD/4K Quality – Crystal-clear video resolution",
      detail:
        "We use professional capture workflows for clean, broadcast-quality visuals that look polished across phones, laptops, and large venue screens.",
    },
    {
      icon: Zap,
      text: "Multi-Camera Setup – Dynamic angles for full coverage",
      detail:
        "Our team coordinates multiple camera positions so key moments are captured from wide, medium, and close perspectives without missing important scenes.",
    },
    {
      icon: Video,
      text: "Drone Integration – Aerial shots that elevate your event",
      detail:
        "Drone coverage adds cinematic perspective for weddings, outdoor ceremonies, and large gatherings while matching the event tone and timeline.",
    },
    {
      icon: Eye,
      text: "Online Viewing – Streamed live for remote audiences",
      detail:
        "Friends, family, and guests around the world can watch in real time with stable delivery designed for high-attendance viewing.",
    },
    {
      icon: HardDrive,
      text: "Backup Recording – Never miss a moment — recorded safely",
      detail:
        "In addition to livestreaming, recordings are captured for replay and archiving so your event remains available after the live broadcast.",
    },
    {
      icon: Mic,
      text: "Remote Speaker – Seamless integration for virtual presenters",
      detail:
        "We support hybrid participation by integrating off-site speakers and guests into your production with clear audio and synchronized visuals.",
    },
  ];

  const eventTypes = ["Corporate Events", "Weddings", "Funerals", "Conferences", "Church Services", "School Events"];

  return (
    <>
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Services</p>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-gray-900">
              Elevate Your Event with Ultra-HD Live Streaming
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From intimate ceremonies by the Ocho Rios shore to grand conferences in Kingston halls, our crews ensure crisp, seamless streaming.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-900">Key Features (Tap for details)</h3>
              <div className="space-y-4">
                {features.map((feature) => (
                  <button
                    key={feature.text}
                    onClick={() => setSelectedFeature({ title: feature.text, description: feature.detail })}
                    className="w-full flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 text-left"
                  >
                    <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">Event Types We Cover</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {eventTypes.map((event) => (
                    <div key={event} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                      <Check className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                      <span className="font-medium">{event}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-blue-300/30 bg-blue-500/10 p-4 flex gap-3">
                  <Users className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <p className="text-sm text-slate-200">
                    Suitable for private families, churches, schools, conference organizers, and corporate brands across Jamaica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedFeature} onOpenChange={(open) => !open && setSelectedFeature(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedFeature?.title}</DialogTitle>
            <DialogDescription className="pt-2 leading-relaxed text-base text-gray-600">{selectedFeature?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServicesSection;
