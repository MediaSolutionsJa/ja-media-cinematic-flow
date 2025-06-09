
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const PackagesSection = () => {
  const scrollToBooking = (packageName: string) => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Pre-select the package in the form
      setTimeout(() => {
        const packageSelect = document.getElementById("package-select") as HTMLSelectElement;
        if (packageSelect) {
          packageSelect.value = packageName;
          // Trigger change event to update the form
          packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 500);
    }
  };

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
            Live Streaming Packages
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Available in St. Ann, Kingston, Montego Bay or virtually anywhere in Jamaica.
          </p>
        </div>

        {/* Main Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Simple Package */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-gray-900">Simple Package</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$40,000</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>• 1hr 30mins</li>
              <li>• 1 Full HD (1080p) Stationary Camera</li>
              <li>• Wired/Wireless Audio</li>
              <li>• Stream to 1 Platform</li>
              <li>• Custom Overlays</li>
              <li>• Unlimited Viewers</li>
              <li>• Live Chat/Comments</li>
              <li>• Recording Available</li>
            </ul>
            <p className="text-center text-sm text-gray-500 mb-6">Best for short or small events</p>
            <Button 
              onClick={() => scrollToBooking("Simple Package - $40,000")}
              variant="outline"
              className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Select Package
            </Button>
          </div>

          {/* Standard Package - Most Popular */}
          <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-gray-900">Standard Package</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$60,000</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>• 2hrs 30mins</li>
              <li>• 2 4K Stationary Cameras</li>
              <li>• Full HD 1080p Output</li>
              <li>• Wired/Wireless Audio</li>
              <li>• Stream to 1 Platform</li>
              <li>• Custom Overlays</li>
              <li>• Unlimited Viewers</li>
              <li>• Live Chat/Comments</li>
              <li>• Remote Speaker Integration</li>
              <li>• Recording Available</li>
            </ul>
            <p className="text-center text-sm text-gray-500 mb-6">Great for weddings, funerals, graduations</p>
            <Button 
              onClick={() => scrollToBooking("Standard Package - $60,000")}
              variant="outline"
              className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Select Package
            </Button>
          </div>

          {/* Premium Package */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-gray-900">Premium Package</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$110,000</div>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li>• 3hrs 30 min</li>
              <li>• 3 Cameras (2 Stationary, 1 Roaming)</li>
              <li>• Full HD 1080p Streaming</li>
              <li>• Stream to 1 Platform</li>
              <li>• Wired/Wireless Audio</li>
              <li>• Drone Footage Integration</li>
              <li>• Remote Speaker Integration</li>
              <li>• Custom Overlays</li>
              <li>• Recording Available Online</li>
            </ul>
            <p className="text-center text-sm text-gray-500 mb-6">Ideal for large and hybrid events</p>
            <Button 
              onClick={() => scrollToBooking("Premium Package - $110,000")}
              variant="outline"
              className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Select Package
            </Button>
          </div>
        </div>

        {/* Elite Package - Separate */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            {/* Save 20% Tab */}
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-4 py-2 rounded-tl-lg rounded-br-lg font-bold text-sm flex items-center gap-2">
              <Star className="w-4 h-4" />
              SAVE 20%
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-montserrat font-bold mb-4">Elite Videography Package</h3>
                <div className="text-5xl font-bold text-yellow-400 mb-4">$400,000 JMD</div>
                <p className="text-lg mb-6 opacity-90">Top-Tier Production for Weddings, Corporate Events, Concerts and VIP Occasions</p>
                <p className="text-sm italic mb-6 opacity-80">Perfect for clients who want their event to feel like a film premiere</p>
                <Button 
                  onClick={() => scrollToBooking("Elite Videography Package - $400,000")}
                  className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Select Elite Package
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  5-Camera Setup (3 Stationary 4K, 1 Roaming/Gimbal, 1 Drone)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Same-Day Edited Highlight Video
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Event DJ (Full Setup)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Personalized Video Tribute
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Custom Overlays + Branded Transitions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  2 Rounds of Client Revisions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Photography Coverage (200 Images)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  High-Fidelity Audio (Wired/Wireless + PA System)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Projector Setup
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Live Stream to up to 3 Platforms
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Online Viewing Portal + USB Package
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Raw Footage Backup
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
