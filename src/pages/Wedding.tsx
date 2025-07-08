
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/0f576b1f-2447-4b53-b678-21b6e7e2e915.png')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <Heart className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 tracking-tight">
              Capture Every Detail of Your Wedding Day
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Explore wedding photo & video packages crafted for timeless Jamaican love stories.
            </p>
            <Button 
              onClick={() => setShowBookingForm(true)}
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book a Session
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Wedding Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your special day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-amber-500' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-amber-500 text-black font-semibold">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-montserrat font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-amber-600">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleBookSession(pkg.id)}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Book a Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Add-Ons
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your wedding package with these additional services
            </p>
          </div>

          <Collapsible open={showAddOns} onOpenChange={setShowAddOns}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full text-left justify-between p-6 text-lg font-semibold">
                View All Add-Ons
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showAddOns ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-900">{addon.name}</span>
                    <span className="font-bold text-amber-600">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Payment & Cancellation Terms */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Collapsible open={showTerms} onOpenChange={setShowTerms}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full text-left justify-between p-6 text-lg font-semibold">
                Payment & Cancellation Terms
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showTerms ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                  <p className="text-gray-700">50% deposit required to confirm booking.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                  <p className="text-gray-700">Remaining balance due within 1 week after the event.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                  <p className="text-gray-700">Full deposit refund if canceled 5+ days in advance.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                  <p className="text-gray-700">50% refund if canceled within 5 days.</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our wedding services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Do you shoot destination weddings?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Yes, we shoot destination weddings! All travel expenses (accommodation, transportation, meals) must be covered by the client. We're excited to capture your special day wherever it takes place.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Can I extend the session on the day of?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Yes, you can extend your session on the day of the wedding, subject to our availability. Additional hours will be charged at our standard hourly rate. We recommend discussing this possibility during your consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Do I have to order prints through you?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                No, you're not required to order prints through us. All packages include high-resolution digital files that you can use to print anywhere you like. However, we do offer professional printing services for your convenience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Footer Banner */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Still have questions? Let's talk!
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
            <a href="tel:876-304-7551" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <Phone className="w-5 h-5" />
              Call or WhatsApp: 876-304-7551
            </a>
            <a href="https://www.mediasolutionsja.com" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <Globe className="w-5 h-5" />
              www.MediaSolutionsJA.com
            </a>
            <a href="mailto:mediasolutionsja@gmail.com" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <Mail className="w-5 h-5" />
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
