import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  CameraIcon,
  Check,
  Clapperboard,
  MapPin,
  Menu,
  Mic,
  MonitorPlay,
  Phone,
  Quote,
  Radio,
  ShieldCheck,
  Star,
  Video,
  Wifi,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Our Work", id: "our-work" },
  { label: "Packages", id: "packages" },
  { label: "Why Choose Us", id: "why-choose-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const services = [
  {
    icon: Radio,
    title: "Funeral Live Streaming",
    desc: "Respectful livestream coverage with stable broadcast quality so loved ones overseas can be present in real time.",
  },
  {
    icon: Video,
    title: "Wedding Coverage",
    desc: "Elegant multi-camera wedding livestream and cinematic highlights crafted to preserve every meaningful moment.",
  },
  {
    icon: MonitorPlay,
    title: "Corporate Event Coverage",
    desc: "Professional event videography and livestream services in Jamaica for conferences, launches, and executive events.",
  },
  {
    icon: Clapperboard,
    title: "Videography Services",
    desc: "Broadcast-ready event videography in Jamaica with sharp visuals, clean storytelling, and polished post-production.",
  },
  {
    icon: Camera,
    title: "Photography Services",
    desc: "Premium event photography that captures atmosphere, emotion, and detail for private and corporate clients.",
  },
  {
    icon: CameraIcon,
    title: "Drone Services",
    desc: "Cinematic aerial coverage and drone services in Jamaica for stunning perspective and premium visual impact.",
  },
];

const packages = [
  {
    name: "Essential",
    cameras: "2-camera setup",
    streaming: "HD livestream support",
    editing: "Basic event recording",
    drone: "Optional drone add-on",
    cta: "Get Essential Quote",
    featured: false,
  },
  {
    name: "Signature",
    cameras: "3-camera professional setup",
    streaming: "Priority livestream management",
    editing: "Highlight edit included",
    drone: "Drone opening sequence",
    cta: "Book Signature Package",
    featured: true,
  },
  {
    name: "Premium",
    cameras: "4+ camera cinematic setup",
    streaming: "Full production livestream",
    editing: "Premium edited film",
    drone: "Advanced drone coverage",
    cta: "Get Premium Proposal",
    featured: false,
  },
];

const portfolio = [
  { title: "Funeral Tribute Coverage", category: "Funerals", image: "/lovable-uploads/0f576b1f-2447-4b53-b678-21b6e7e2e915.png" },
  { title: "Luxury Wedding Story", category: "Weddings", image: "/lovable-uploads/80c5aaaa-4b80-4d28-89c5-ae48df6b8da6.png" },
  { title: "Executive Event Broadcast", category: "Corporate", image: "/lovable-uploads/f9b73284-1c19-49e3-9c30-760b258fd07b.png" },
  { title: "Islandwide Livestream Production", category: "Livestreams", image: "/lovable-uploads/a5864377-4ee8-4fec-bcc3-7a14b31980bc.png" },
];

const testimonials = [
  {
    quote: "Media Solutions JA handled our funeral livestream with compassion and professionalism. Family overseas felt truly connected.",
    name: "Danielle M.",
    type: "Funeral Family",
  },
  {
    quote: "Our wedding film and livestream were flawless. The quality and communication were excellent from planning to delivery.",
    name: "Andre & Kerri",
    type: "Wedding Couple",
  },
  {
    quote: "For corporate events in Jamaica, they are our trusted production partner—always polished, punctual, and reliable.",
    name: "Operations Manager",
    type: "Corporate Client",
  },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0c0e12]/90 backdrop-blur-xl border-b border-amber-200/20" : "bg-transparent"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
            <img src="/lovable-uploads/f39eac11-6112-488d-a596-eea0f6892264.png" alt="Media Solutions JA logo" className="h-10 w-10 rounded-full object-cover" loading="eager" />
            <div className="text-left">
              <p className="font-semibold leading-none">Media Solutions JA</p>
              <p className="text-xs text-amber-200">Trusted Event Coverage Across Jamaica</p>
            </div>
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm text-zinc-200 transition-colors hover:text-amber-200">
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Button asChild variant="outline" className="border-emerald-400/60 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20">
              <a href="https://wa.me/18763047551" target="_blank" rel="noreferrer">WhatsApp</a>
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="rounded-full bg-amber-500 text-black hover:bg-amber-400">Book Now</Button>
          </div>

          <button className="rounded-md border border-zinc-700 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-800 bg-[#0c0e12]/95 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="rounded-lg px-3 py-2 text-left hover:bg-zinc-800">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
          <img src="/lovable-uploads/38e513f1-ed55-43ad-8ca9-c10f7c5ccd2b.png" alt="Professional Jamaican event media production" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-[#08090b]" />
          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <Badge className="mb-5 border-amber-300/40 bg-amber-500/15 text-amber-200">Trusted Event Coverage Across Jamaica</Badge>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Professional Event Live Streaming & Media Services in Jamaica</h1>
            <p className="mt-6 max-w-3xl text-lg text-zinc-200">Media Solutions JA delivers high-quality, affordable, and reliable livestream services in Jamaica, including funeral live streaming, wedding videography, photography, drone services, and full event coverage islandwide.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => scrollToSection("contact")} className="h-12 rounded-full bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400">Get a Quote</Button>
              <Button onClick={() => scrollToSection("our-work")} variant="outline" className="h-12 rounded-full border-zinc-200/70 bg-white/5 px-8 text-base">View Our Work</Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-zinc-100 sm:grid-cols-2 lg:grid-cols-4">
              {["Professional setup", "High-quality streaming", "Islandwide service", "Affordable packages"].map((text) => (
                <div key={text} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-[#101317] py-4">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 text-center text-sm text-zinc-300 sm:grid-cols-2 lg:grid-cols-5 lg:text-left">
            {["Professional multi-camera setups", "Reliable livestream production", "Clear audio and video", "Coverage across Jamaica", "Fast client support"].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Premium Media Services for Every Event Type</h2>
          <p className="mt-3 max-w-3xl text-zinc-300">From funeral live streaming Jamaica families can trust to cinematic wedding videography Jamaica couples love, every service is built to protect your most important moments.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group rounded-3xl border border-zinc-700/70 bg-zinc-900/70 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-amber-300/40">
                <service.icon className="mb-4 text-amber-300" />
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-zinc-300">{service.desc}</p>
                <button onClick={() => scrollToSection("contact")} className="mt-5 text-sm font-semibold text-amber-200 transition group-hover:text-amber-100">Get Quote →</button>
              </article>
            ))}
          </div>
        </section>

        <section id="packages" className="bg-[#101317] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">Featured Packages</h2>
            <p className="mt-2 text-zinc-300">Choose the production level that fits your event while keeping quality and reliability first.</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <article key={pkg.name} className={`rounded-3xl border p-7 ${pkg.featured ? "border-amber-300/70 bg-zinc-900 shadow-[0_0_0_1px_rgba(251,191,36,0.25)]" : "border-zinc-700/70 bg-zinc-900/70"}`}>
                  {pkg.featured && <Badge className="mb-4 bg-amber-500 text-black">Most Popular</Badge>}
                  <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                  <ul className="mt-6 space-y-3 text-zinc-300">
                    {[pkg.cameras, pkg.streaming, pkg.editing, pkg.drone].map((feature) => (
                      <li key={feature} className="flex items-center gap-2"><Check size={16} className="text-amber-300" /> {feature}</li>
                    ))}
                  </ul>
                  <Button onClick={() => scrollToSection("contact")} className="mt-7 w-full rounded-full bg-amber-500 text-black hover:bg-amber-400">{pkg.cta}</Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Why Jamaica Chooses Media Solutions JA</h2>
            <p className="mt-4 text-zinc-300">We combine technical excellence with calm, respectful service—especially for sensitive moments like funerals and formal corporate events.</p>
            <div className="mt-8 space-y-4">
              {["Professional and respectful team on-site", "High-quality broadcast look with reliable backup workflow", "Clear communication from first call to final delivery", "Affordable packages tailored for funerals, weddings, church events, and corporate functions"].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
                  <ShieldCheck className="mt-0.5 text-amber-300" size={20} />
                  <p className="text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-700">
            <img src="/lovable-uploads/fa0c4409-9e5c-4328-af71-7be54c490bba.png" alt="Professional event videography Jamaica team at work" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </section>

        <section id="our-work" className="bg-[#101317] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">Our Work</h2>
            <p className="mt-3 text-zinc-300">A cinematic preview of our funerals, weddings, corporate productions, and livestream services Jamaica clients trust.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {portfolio.map((item) => (
                <article key={item.title} className="group overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900/60">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={`${item.title} by Media Solutions JA`} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wide text-amber-200">{item.category}</p>
                    <h3 className="mt-1 text-xl">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <Button className="mt-10 rounded-full bg-white/10 hover:bg-white/20">View Full Portfolio</Button>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-200/20 bg-gradient-to-b from-amber-500/10 to-transparent p-8 sm:p-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">Respectfully Connecting Families Near and Far</h2>
            <p className="mt-4 max-w-3xl text-zinc-300">Our funeral livestream services Jamaica families rely on are designed with compassion, discretion, and reliability so loved ones overseas can join and honour each moment.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Private or public stream options", "Reliable production with on-site technical oversight", "Clear audio and video for meaningful viewing", "Support for overseas viewers and replay access"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-zinc-900/70 p-3"><Check size={16} className="text-amber-300" />{item}</div>
              ))}
            </div>
            <Button onClick={() => scrollToSection("contact")} className="mt-7 rounded-full bg-amber-500 text-black hover:bg-amber-400">Book Funeral Livestream Service</Button>
          </div>
        </section>

        <section id="testimonials" className="bg-[#101317] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">Client Testimonials</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-3xl border border-zinc-700 bg-zinc-900/70 p-6">
                  <Quote className="text-amber-300" />
                  <p className="mt-4 text-zinc-200">{item.quote}</p>
                  <p className="mt-5 font-semibold">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.type}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">How Booking Works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Tell us about your event",
              "Choose your package",
              "We plan and prepare",
              "We deliver professional coverage",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-5">
                <p className="text-sm text-amber-200">Step {index + 1}</p>
                <h3 className="mt-2 text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#101317] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Get a Quote for Your Event</h2>
              <p className="mt-3 text-zinc-300">Tell us your event details and our team will recommend the best livestream, videography, photography, and drone package.</p>
              <div className="mt-6 space-y-3 text-zinc-200">
                <a className="flex items-center gap-2" href="tel:+18763047551"><Phone size={16} /> +1 (876) 304-7551</a>
                <a className="flex items-center gap-2" href="https://wa.me/18763047551" target="_blank" rel="noreferrer"><Wifi size={16} /> WhatsApp Us</a>
                <p className="flex items-center gap-2"><MapPin size={16} /> Islandwide service across Jamaica</p>
                <p className="flex items-center gap-2"><Mic size={16} /> mediasolutionsja@gmail.com</p>
              </div>
            </div>
            <form className="space-y-4 rounded-3xl border border-zinc-700 bg-zinc-900/70 p-6">
              <Input placeholder="Full Name" aria-label="Full Name" className="border-zinc-600 bg-zinc-950/70" />
              <Input placeholder="Phone Number" aria-label="Phone Number" className="border-zinc-600 bg-zinc-950/70" />
              <Input type="email" placeholder="Email Address" aria-label="Email Address" className="border-zinc-600 bg-zinc-950/70" />
              <Input placeholder="Event Type (Funeral, Wedding, Corporate...)" aria-label="Event type" className="border-zinc-600 bg-zinc-950/70" />
              <Input type="date" aria-label="Event Date" className="border-zinc-600 bg-zinc-950/70" />
              <Input placeholder="Event Location" aria-label="Event location" className="border-zinc-600 bg-zinc-950/70" />
              <Textarea placeholder="Tell us about your event" aria-label="Message" className="min-h-28 border-zinc-600 bg-zinc-950/70" />
              <Button className="w-full rounded-full bg-amber-500 text-black hover:bg-amber-400">Request My Quote</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-[#08090b] pb-28 pt-14 sm:pb-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 text-sm sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="text-lg font-semibold">Media Solutions JA</p>
            <p className="mt-3 text-zinc-400">Premium Jamaican event live streaming, videography, photography, and drone production with trusted islandwide service.</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-100">Quick Links</p>
            <ul className="mt-3 space-y-2 text-zinc-400">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.id}><button onClick={() => scrollToSection(item.id)}>{item.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-100">Services</p>
            <ul className="mt-3 space-y-2 text-zinc-400">
              <li>Funeral Live Streaming Jamaica</li>
              <li>Wedding Videography Jamaica</li>
              <li>Event Photography</li>
              <li>Drone Services Jamaica</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-100">Contact</p>
            <ul className="mt-3 space-y-2 text-zinc-400">
              <li>+1 (876) 304-7551</li>
              <li>mediasolutionsja@gmail.com</li>
              <li>St. Ann, Jamaica</li>
            </ul>
            <div className="mt-4 flex gap-2 text-amber-300">{[1, 2, 3, 4, 5].map((n) => <Star key={n} size={16} fill="currentColor" />)}</div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Media Solutions JA. All rights reserved.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-zinc-700 bg-[#090b0f]/95 p-2 backdrop-blur sm:hidden">
        <a href="tel:+18763047551" className="rounded-xl px-2 py-3 text-center text-xs font-medium text-zinc-100">Call</a>
        <a href="https://wa.me/18763047551" target="_blank" rel="noreferrer" className="rounded-xl bg-emerald-500/20 px-2 py-3 text-center text-xs font-medium text-emerald-300">WhatsApp</a>
        <button onClick={() => scrollToSection("contact")} className="rounded-xl bg-amber-500 px-2 py-3 text-xs font-semibold text-black">Get Quote</button>
      </div>
    </div>
  );
};

export default Index;
