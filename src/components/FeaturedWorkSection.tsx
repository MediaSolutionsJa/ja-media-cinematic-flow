import { Link } from "react-router-dom";

const works = [
  {
    src: "/lovable-uploads/e5b11de6-8e92-4e8b-a7ca-6dc9fed6c22f.png",
    alt: "Wedding portrait by Media Solutions JA",
    label: "Wedding Elegance",
  },
  {
    src: "/lovable-uploads/cbcc3ac8-319d-4c3b-89aa-9f4155f24f1a.png",
    alt: "Event coverage by Media Solutions JA",
    label: "Event Coverage",
  },
  {
    src: "/lovable-uploads/6ab636cb-7ee4-492a-acb8-3eb4b42c424a.png",
    alt: "Aerial wedding coverage by Media Solutions JA",
    label: "Drone Storytelling",
  },
];

const FeaturedWorkSection = () => {
  return (
    <section className="py-24 bg-[#0b0f17] text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-amber-300 uppercase tracking-[0.24em] text-xs md:text-sm mb-3">Featured Work</p>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold">Cinematic highlights from real events</h2>
          </div>
          <Link to="/our-work" className="inline-flex items-center rounded-full border border-amber-300/60 px-6 py-3 text-amber-200 hover:bg-amber-300 hover:text-[#101623] transition-colors duration-300">
            View Full Portfolio
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work) => (
            <Link to="/our-work" key={work.alt} className="group relative overflow-hidden rounded-3xl border border-white/10">
              <img src={work.src} alt={work.alt} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">{work.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
