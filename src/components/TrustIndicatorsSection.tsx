import { BadgeCheck, Clock3, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";

const TrustIndicatorsSection = () => {
  const indicators = [
    {
      icon: ShieldCheck,
      title: "Professional & Reliable",
      description: "Structured crews, production checklists, and dependable technical execution.",
    },
    {
      icon: MapPin,
      title: "Jamaica-Wide Coverage",
      description: "Serving St. Ann, Kingston, Montego Bay, and events across the island.",
    },
    {
      icon: Clock3,
      title: "Fast Turnaround Support",
      description: "Prompt communication before, during, and after your event.",
    },
    {
      icon: Users,
      title: "For Families & Enterprises",
      description: "Respectful funeral coverage, elegant weddings, and polished corporate production.",
    },
    {
      icon: Sparkles,
      title: "Premium Visual Quality",
      description: "Multi-camera setups, drone integration, and cinematic editing workflows.",
    },
    {
      icon: BadgeCheck,
      title: "Trusted by Local Clients",
      description: "Chosen by schools, churches, corporate teams, and private families.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0e1118] text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-amber-300 uppercase tracking-[0.24em] text-xs md:text-sm mb-3">Trusted Production Partner</p>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold">Built for moments that matter most</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {indicators.map((indicator) => (
            <div key={indicator.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <indicator.icon className="w-10 h-10 text-amber-300 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{indicator.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;
