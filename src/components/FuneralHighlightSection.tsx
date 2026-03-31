import { Button } from "@/components/ui/button";

const FuneralHighlightSection = () => {
  const goToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#18151d] via-[#101520] to-[#0c1019] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
          <p className="text-amber-300 uppercase tracking-[0.24em] text-xs md:text-sm mb-4">Funeral Livestream Coverage</p>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Respectful, clear, and dependable memorial streaming</h2>
          <p className="text-slate-200 leading-relaxed max-w-4xl mb-8">
            We understand the emotional weight of farewell services. Our team provides discreet setup, high-quality audio and video,
            and reliable online access for family and friends who cannot attend in person. Your loved one&apos;s tribute is handled with care,
            dignity, and professionalism from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={goToBooking} className="bg-amber-400 text-[#1c1f2c] hover:bg-amber-300 rounded-full px-8">
              Request Funeral Coverage
            </Button>
            <a
              href="https://wa.me/18763047551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-2 text-white hover:bg-white hover:text-[#161923] transition-colors"
            >
              WhatsApp a Coordinator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuneralHighlightSection;
