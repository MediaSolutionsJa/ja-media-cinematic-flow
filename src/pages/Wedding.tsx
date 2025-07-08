
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Heart, Camera, Video, Star, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import WeddingBookingForm from "@/components/WeddingBookingForm";

const Wedding = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showAddOns, setShowAddOns] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const packages = [
    {
      id: "starter-photo",
      title: "The Starter Photo Package",
      price: "$200 USD",
      features: [
        "Up to 1 hour of photography coverage by one professional photographer",
        "30 edited high-resolution images delivered digitally",
        "Digital sneak peek of 5–10 photos within 24 hours",
        "Online gallery for viewing and sharing"
      ],
      popular: false
    },
    {
      id: "starter-photo-video",
      title: "The Starter Photo & Video Package",
      price: "$400 USD",
      features: [
        "Up to 1 hour of photography and videography coverage",
        "One professional photographer + one videographer",
        "30 edited high-res images + 3–5 min highlight video",
        "Sneak peek: 5–10 photos in 24 hours",
        "Online gallery for viewing and sharing"
      ],
      popular: false
    },
    {
      id: "essential-photo",
      title: "The Essential Photo Package",
      price: "$600 USD",
      features: [
        "Up to 3 hours, 2 photographers",
        "100 high-res images",
        "Sneak peek: 10–15 images in 24 hours",
        "30 prints, 1 album, 1 USB drive, framed 11x17"
      ],
      popular: false
    },
    {
      id: "essential-photo-video",
      title: "The Essential Photo & Video Package",
      price: "$1,000 USD",
      features: [
        "3 hours photo & video coverage",
        "2 photographers, 1 videographer",
        "100 images, 5–7 min highlight video",
        "Sneak peek: 10–15 photos",
        "30 prints, 1 album, 1 USB with everything"
      ],
      popular: true
    },
    {
      id: "premium-photo",
      title: "The Premium Photo Package",
      price: "$1,200 USD",
      features: [
        "6 hours, 2 photographers",
        "250 high-res images",
        "Sneak peek: 15–20 photos",
        "Photobook (50 prints), 1 framed print, USB"
      ],
      popular: false
    },
    {
      id: "premium-photo-video",
      title: "The Premium Photo & Video Package",
      price: "$2,000 USD",
      features: [
        "6 hours photo + video",
        "2 photographers, 2 videographers",
        "250 images, 7–10 min highlight video",
        "Custom photobook, USB, sneak peek included"
      ],
      popular: false
    },
    {
      id: "deluxe-photo",
      title: "The Deluxe Photo Package",
      price: "$1,800 USD",
      features: [
        "10 hours coverage",
        "2 photographers",
        "400 images, 20–25 sneak peeks",
        "Custom photobook, 2 framed prints",
        "Includes engagement + boudoir session"
      ],
      popular: false
    },
    {
      id: "deluxe-photo-video",
      title: "The Deluxe Photo & Video Package",
      price: "$3,000 USD",
      features: [
        "2 full days of photo + video",
        "2 photographers, 2 videographers",
        "400 images, 10–12 min story + 5–7 min highlight video",
        "2 USBs, engagement + boudoir session",
        "Custom photobook"
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: "Live Streaming", price: "$300 USD" },
    { name: "Additional Photographer", price: "$400 USD" },
    { name: "Additional Videographer", price: "$400 USD" },
    { name: "Extra Prints", price: "$2.50 each" },
    { name: "Cinematic Engagement Video", price: "$150 USD" },
    { name: "8x8 Backdrop", price: "$300 USD" },
    { name: "Aerial Drone Photo (5–10 shots)", price: "$150 USD" },
    { name: "Aerial Drone Video (60 seconds)", price: "$200 USD" },
    { name: "Aerial Drone Photo + Video Combo", price: "$300 USD" },
    { name: "Highlight Video (extra)", price: "$600 USD" },
    { name: "Photo Canvas for Guest Signing (48x36)", price: "$350" },
    { name: "Photo Canvas for Guest Signing (32x24)", price: "$250" },
    { name: "Photo Canvas for Guest Signing (24x18)", price: "$180" },
    { name: "Photo Canvas for Guest Signing (20x15)", price: "$105" },
    { name: "Photo Canvas for Guest Signing (16x12)", price: "$85" }
  ];

  const handleBookSession = (packageId: string) => {
    setSelectedPackage(packageId);
    setShowBookingForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/0f576b1f-2447-4b53-b678-21b6e7e2e915.png')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-amber-300 mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium tracking-widest uppercase">Media Solutions JA</span>
              <Heart className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-tight">
              Capture the Magic<br />
              <span className="font-medium">of Your Wedding Day</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Explore our packages tailored for love, memories, and legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowBookingForm(true)}
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book a Session
              </Button>
              <Button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium tracking-widest uppercase">Pricing & Packages</span>
              <Heart className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Choose the Perfect Package<br />
              <span className="font-medium">to Capture Your Love Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I am honoured to be considered for one of the most important roles of your wedding day. 
              Choose the perfect package to capture your love story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 shadow-lg ${pkg.popular ? 'ring-2 ring-rose-300 shadow-rose-100' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-rose-500 text-white font-medium px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="text-xl font-light text-gray-900 mb-4 leading-tight">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-4xl font-light text-gray-900 mb-2">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                        <Heart className="w-3 h-3 text-rose-400 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleBookSession(pkg.id)}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-rose-50/50 to-amber-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium tracking-widest uppercase">Add-Ons</span>
              <Heart className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Enhance Your Wedding Package
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Add these beautiful services to make your wedding day even more special
            </p>
          </div>

          <Collapsible open={showAddOns} onOpenChange={setShowAddOns}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full text-left justify-between p-8 text-lg font-light bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
                View All Add-Ons
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showAddOns ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <span className="font-light text-gray-900">{addon.name}</span>
                    <span className="font-medium text-amber-600">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Payment & Cancellation Terms */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium tracking-widest uppercase">Payment & Cancellation Terms</span>
              <Heart className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Clear & Transparent Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              For your peace of mind
            </p>
          </div>
          <Collapsible open={showTerms} onOpenChange={setShowTerms}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full text-left justify-between p-8 text-lg font-light bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
                View Payment & Cancellation Policy
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showTerms ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-lg space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-4 h-4 text-rose-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">50% deposit required to confirm booking.</p>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-4 h-4 text-rose-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">Remaining balance due within 1 week after the event.</p>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-4 h-4 text-rose-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">Full deposit refund if canceled 5+ days in advance.</p>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-4 h-4 text-rose-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">50% refund if canceled within 5 days.</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-rose-50/50 to-amber-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium tracking-widest uppercase">Frequently Asked Questions</span>
              <Heart className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              About our wedding photography and videography services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/80 backdrop-blur-sm rounded-2xl border-0 shadow-lg">
              <AccordionTrigger className="px-8 py-6 text-left font-light text-gray-900 hover:no-underline text-lg">
                Do you shoot destination weddings?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
                Yes, we shoot destination weddings! All travel expenses (accommodation, transportation, meals) must be covered by the client. We're excited to capture your special day wherever it takes place.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 backdrop-blur-sm rounded-2xl border-0 shadow-lg">
              <AccordionTrigger className="px-8 py-6 text-left font-light text-gray-900 hover:no-underline text-lg">
                Can I extend the session on the day of?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
                Yes, you can extend your session on the day of the wedding, subject to our availability. Additional hours will be charged at our standard hourly rate. We recommend discussing this possibility during your consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 backdrop-blur-sm rounded-2xl border-0 shadow-lg">
              <AccordionTrigger className="px-8 py-6 text-left font-light text-gray-900 hover:no-underline text-lg">
                Do I have to order prints through you?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
                No, you're not required to order prints through us. All packages include high-resolution digital files that you can use to print anywhere you like. However, we do offer professional printing services for your convenience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Footer Banner */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-amber-500/10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-amber-400 mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium tracking-widest uppercase">Let's Connect</span>
            <Heart className="w-4 h-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Still have questions?<br />
            <span className="font-medium">Let's talk!</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm here to help make your wedding day absolutely perfect. Reach out and let's discuss how we can capture your love story.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="tel:876-304-7551" className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors text-lg">
              <Phone className="w-6 h-6" />
              Call or WhatsApp: 876-304-7551
            </a>
            <a href="https://www.mediasolutionsja.com" className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors text-lg">
              <Globe className="w-6 h-6" />
              www.MediaSolutionsJA.com
            </a>
            <a href="mailto:mediasolutionsja@gmail.com" className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors text-lg">
              <Mail className="w-6 h-6" />
              mediasolutionsja@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      <WeddingBookingForm 
        isOpen={showBookingForm} 
        onClose={() => setShowBookingForm(false)}
        selectedPackage={selectedPackage}
        packages={packages}
        addOns={addOns}
      />
    </div>
  );
};

export default Wedding;
