import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type PackageItem = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  ctaValue: string;
  badge?: string;
  premium?: boolean;
};

const PackagesSection = () => {
  const [activePackage, setActivePackage] = useState<PackageItem | null>(null);

  const scrollToBooking = (packageName: string) => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const packageSelect = document.getElementById("package-select") as HTMLSelectElement;
        if (packageSelect) {
          packageSelect.value = packageName;
          packageSelect.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 500);
    }
  };

  const packages: PackageItem[] = [
    {
      name: "Simple Package",
      price: "$40,000",
      subtitle: "Best for short or small events",
      ctaValue: "Simple Package - $40,000",
      features: [
        "1hr 30mins",
        "1 Full HD (1080p) Stationary Camera",
        "Wired/Wireless Audio",
        "Stream to 1 Platform",
        "Custom Overlays",
        "Unlimited Viewers",
        "Live Chat/Comments",
        "Recording Available",
      ],
    },
    {
      name: "Standard Package",
      price: "$60,000",
      subtitle: "Great for weddings, funerals, graduations",
      ctaValue: "Standard Package - $60,000",
      badge: "Most Popular",
      features: [
        "2hrs 30mins",
        "2 4K Stationary Cameras",
        "Full HD 1080p Output",
        "Wired/Wireless Audio",
        "Stream to 1 Platform",
        "Custom Overlays",
        "Unlimited Viewers",
        "Live Chat/Comments",
        "Remote Speaker Integration",
        "Recording Available",
      ],
    },
    {
      name: "Premium Package",
      price: "$110,000",
      subtitle: "Ideal for large and hybrid events",
      ctaValue: "Premium Package - $110,000",
      features: [
        "3hrs 30 min",
        "3 Cameras (2 Stationary, 1 Roaming)",
        "Full HD 1080p Streaming",
        "Stream to 1 Platform",
        "Wired/Wireless Audio",
        "Drone Footage Integration",
        "Remote Speaker Integration",
        "Custom Overlays",
        "Recording Available Online",
      ],
    },
    {
      name: "Elite Videography Package",
      price: "$400,000 JMD",
      subtitle: "Top-Tier Production for Weddings, Corporate Events, Concerts and VIP Occasions",
      ctaValue: "Elite Videography Package - $400,000",
      premium: true,
      badge: "SAVE 20%",
      features: [
        "5-Camera Setup (3 Stationary 4K, 1 Roaming/Gimbal, 1 Drone)",
        "Same-Day Edited Highlight Video",
        "Event DJ (Full Setup)",
        "Personalized Video Tribute",
        "Custom Overlays + Branded Transitions",
        "2 Rounds of Client Revisions",
        "Photography Coverage (200 Images)",
        "High-Fidelity Audio (Wired/Wireless + PA System)",
        "Projector Setup",
        "Live Stream to up to 3 Platforms",
        "Online Viewing Portal + USB Package",
        "Raw Footage Backup",
      ],
    },
  ];

  return (
    <>
      <section id="packages" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Packages</p>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-5 text-gray-900">Live Streaming Packages</h2>
            <p className="text-lg text-gray-600 mb-3">Available in St. Ann, Kingston, Montego Bay or virtually anywhere in Jamaica.</p>
            <p className="text-sm text-gray-500">Tap any package to preview full details in a quick popup.</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  pkg.premium
                    ? "bg-gradient-to-br from-[#1f2342] to-[#2f1d4d] text-white border-purple-400/40"
                    : pkg.badge
                      ? "bg-blue-50 border-blue-200"
                      : "bg-slate-50 border-slate-200"
                }`}
              >
                {pkg.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold ${
                      pkg.premium ? "bg-yellow-400 text-black" : "bg-blue-600 text-white"
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                <h3 className={`text-2xl font-montserrat font-bold mb-2 ${pkg.premium ? "text-white" : "text-gray-900"}`}>{pkg.name}</h3>
                <div className={`text-4xl font-bold mb-4 ${pkg.premium ? "text-yellow-300" : "text-blue-600"}`}>{pkg.price}</div>
                <ul className={`space-y-2 mb-6 text-sm ${pkg.premium ? "text-slate-100" : "text-gray-600"}`}>
                  {pkg.features.slice(0, 5).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className={`mb-6 text-sm ${pkg.premium ? "text-slate-200" : "text-gray-500"}`}>{pkg.subtitle}</p>

                <div className="mt-auto space-y-3">
                  <Button
                    onClick={() => scrollToBooking(pkg.ctaValue)}
                    variant={pkg.premium ? "default" : "outline"}
                    className={`w-full ${pkg.premium ? "bg-yellow-400 hover:bg-yellow-300 text-black" : "border-black text-black hover:bg-black hover:text-white"}`}
                  >
                    Select Package
                  </Button>
                  <button
                    onClick={() => setActivePackage(pkg)}
                    className={`w-full rounded-md py-2 text-sm font-medium transition-colors ${
                      pkg.premium ? "bg-white/10 hover:bg-white/20 text-white" : "bg-white border border-slate-200 hover:bg-slate-100 text-gray-700"
                    }`}
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!activePackage} onOpenChange={(open) => !open && setActivePackage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              {activePackage?.premium && <Star className="w-5 h-5 text-yellow-500" />} {activePackage?.name}
            </DialogTitle>
            <DialogDescription className="text-base">
              {activePackage?.price} • {activePackage?.subtitle}
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[50vh] overflow-y-auto pr-2">
            <ul className="space-y-2 text-sm text-gray-700">
              {activePackage?.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
          {activePackage && (
            <Button onClick={() => scrollToBooking(activePackage.ctaValue)} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Continue with {activePackage.name}
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PackagesSection;
