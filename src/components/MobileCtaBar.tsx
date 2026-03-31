const MobileCtaBar = () => {
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-white/10 bg-[#090d15]/95 backdrop-blur-md px-3 py-2">
      <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
        <a href="tel:+18763047551" className="rounded-lg bg-white/10 px-3 py-2 text-center text-white">
          Call
        </a>
        <a href="https://wa.me/18763047551" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-white">
          WhatsApp
        </a>
        <button onClick={scrollToBooking} className="rounded-lg bg-amber-400 px-3 py-2 text-center text-[#131925]">
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default MobileCtaBar;
