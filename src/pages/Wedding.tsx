import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Camera, Video, Plane, Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const Wedding = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const packages = [
    {
      name: "The Starter Photo Package",
      price: "$200",
      features: [
        "Up to 1 hour of photography coverage by one professional photographer",
        "30 edited high-resolution images delivered digitally",
        "Digital sneak peek of 5-10 photos within 24 hours",
        "Online gallery for viewing and sharing"
      ]
    },
    {
      name: "The Starter Photo & Video Package",
      price: "$400",
      features: [
        "Up to 1 hour of photography coverage",
        "Up to 1 hour of videography coverage",
        "One professional photographer",
        "One professional videographer",
        "30 edited high-resolution images delivered digitally",
        "3-5 minute highlight video delivered digitally",
        "Digital sneak peek of 5-10 photos within 24 hours",
        "Online gallery for viewing and sharing"
      ]
    },
    {
      name: "The Essential Photo Package",
      price: "$600",
      features: [
        "Up to 3 hours of photography coverage",
        "One professional photographer",
        "75 edited high-resolution images delivered digitally",
        "Digital sneak peek of 10-15 photos within 24 hours",
        "Online gallery for viewing and sharing",
        "USB drive with all edited images"
      ]
    },
    {
      name: "The Essential Photo & Video Package",
      price: "$1,000",
      popular: true,
      features: [
        "Up to 3 hours of photography coverage",
        "Up to 3 hours of videography coverage",
        "One professional photographer",
        "One professional videographer",
        "75 edited high-resolution images delivered digitally",
        "5-8 minute highlight video delivered digitally",
        "Digital sneak peek of 10-15 photos within 24 hours",
        "Online gallery for viewing and sharing",
        "USB drive with all edited images and videos"
      ]
    },
    {
      name: "The Premium Photo Package",
      price: "$1,200",
      features: [
        "Up to 5 hours of photography coverage",
        "One professional photographer",
        "150 edited high-resolution images delivered digitally",
        "Digital sneak peek of 15-20 photos within 24 hours",
        "Online gallery for viewing and sharing",
        "USB drive with all edited images",
        "10 printed 5x7 photos"
      ]
    },
    {
      name: "The Premium Photo & Video Package",
      price: "$2,000",
      features: [
        "Up to 5 hours of photography coverage",
        "Up to 5 hours of videography coverage",
        "One professional photographer",
        "One professional videographer",
        "150 edited high-resolution images delivered digitally",
        "8-12 minute highlight video delivered digitally",
        "Digital sneak peek of 15-20 photos within 24 hours",
        "Online gallery for viewing and sharing",
        "USB drive with all edited images and videos",
        "10 printed 5x7 photos"
      ]
    },
    {
      name: "The Deluxe Photo Package",
      price: "$1,800",
      features: [
        "Up to 8 hours of photography coverage",
        "One professional photographer",
        "200+ edited high-resolution images delivered digitally",
        "Digital sneak peek of 20-25 photos within 24 hours",
        "Online gallery for viewing and sharing",
        "USB drive with all edited images",
        "20 printed 5x7 photos",
        "Photo album with 50 selected images"
      ]
    },
    {
      name: "The Deluxe Photo & Video Package",
      price: "$3,000",
      features: [
        "Up to 8 hours of photography coverage",
        "Up to 8 hours of videography coverage",
        "One professional photographer",
        "One professional videographer",
        "200+ edited high-resolution images delivered digitally",
        "15-20 minute highlight video delivered digitally",
        "Digital sneak peek of 20-25 photos within 24 hours",
        "Online gallery for viewing and sharing",
        "USB drive with all edited images and videos",
        "20 printed 5x7 photos",
        "Photo album with 50 selected images"
      ]
    }
  ];

  const addOns = [
    { name: "Live Streaming", price: "$300" },
    { name: "Additional Photographer", price: "$400" },
    { name: "Additional Videographer", price: "$400" },
    { name: "Extra Prints", price: "$2.50 each" },
    { name: "Cinematic Engagement Video", price: "$150" },
    { name: "Backdrop (8x8 ft)", price: "$300" },
    { name: "Aerial Drone (Photo)", price: "$150" },
    { name: "Aerial Drone (Video)", price: "$200" },
    { name: "Aerial Drone (Photo + Video)", price: "$300" },
    { name: "Highlight Video", price: "$600" },
    { name: "Photo Canvas for Guest Signing (48x36in)", price: "$350" },
    { name: "Photo Canvas for Guest Signing (32x24in)", price: "$250" },
    { name: "Photo Canvas for Guest Signing (24x18in)", price: "$180" },
    { name: "Photo Canvas for Guest Signing (20x15in)", price: "$105" },
    { name: "Photo Canvas for Guest Signing (16x12in)", price: "$85" }
  ];

  const handleAddOnChange = (addOnName: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns([...selectedAddOns, addOnName]);
    } else {
      setSelectedAddOns(selectedAddOns.filter(item => item !== addOnName));
    }
  };

  const handleBooking = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsBookingOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for submitting! ❤️",
      description: "We'll be in touch shortly to secure your special day.",
    });
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-pink-100/50 via-white to-rose-100/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/wedding-moment-hero.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="animate-fade-in">
            <Heart className="w-16 h-16 mx-auto mb-6 text-rose-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-gray-800 mb-6 leading-tight">
              Capture the Magic of Your
              <span className="text-transparent bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text"> Wedding Day</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Explore our packages tailored for love, memories, and legacy.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="w-5 h-5 mr-2" />
              Book a Session
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-24"></div>
              <Heart className="w-8 h-8 mx-4 text-rose-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-24"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 mb-4">
              Wedding Investment Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the perfect package to capture your once-in-a-lifetime moments with professional elegance and artistic vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border ${
                  pkg.popular ? 'border-rose-300 ring-2 ring-rose-200' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-rose-400 to-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text">
                    {pkg.price}
                  </div>
                  <p className="text-gray-500 text-sm">USD</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-gray-600">
                      <Heart className="w-4 h-4 text-rose-400 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleBooking(pkg.name)}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white border-2 border-rose-300 text-rose-600 hover:bg-rose-50'
                  }`}
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-50/50 to-pink-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Enhance Your Experience
            </h2>
            <p className="text-gray-600">Add special touches to make your day even more memorable</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <Accordion type="single" collapsible defaultValue="addons">
              <AccordionItem value="addons" className="border-none">
                <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:text-rose-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <Palette className="w-6 h-6 text-rose-400" />
                    Available Add-Ons
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {addOns.map((addOn, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-rose-200 transition-colors">
                        <div className="flex items-center gap-3">
                          {addOn.name.includes('Drone') && <Plane className="w-5 h-5 text-rose-400" />}
                          {addOn.name.includes('Video') && <Video className="w-5 h-5 text-rose-400" />}
                          {!addOn.name.includes('Drone') && !addOn.name.includes('Video') && <Camera className="w-5 h-5 text-rose-400" />}
                          <span className="text-gray-700 font-medium">{addOn.name}</span>
                        </div>
                        <span className="text-rose-600 font-semibold">{addOn.price}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="terms" className="border-none">
                <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:text-rose-600 transition-colors">
                  Payment & Cancellation Terms
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4 mt-4">
                  <p>• 50% deposit required upon booking confirmation.</p>
                  <p>• Full payment due within one week after the event.</p>
                  <p>• Cancellations made at least 5 days before the event: full deposit refund.</p>
                  <p>• Cancellations within 5 days: 50% of deposit refunded.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-rose-50/50 to-pink-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="destination">
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-rose-600 transition-colors">
                  Do you shoot destination weddings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we love destination weddings! All travel expenses must be covered by the client.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="extend">
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-rose-600 transition-colors">
                  Can I extend the session on the day of the wedding?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, extensions are possible based on our availability. Additional hours are charged at our standard hourly rate.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="prints">
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-rose-600 transition-colors">
                  Do I have to order prints through you?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Not at all! You'll receive high-resolution digital files and can print them wherever you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-rose-400 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Still have questions? Let's talk!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call or WhatsApp us at 1-876-304-7551
          </p>
          <p className="text-lg opacity-80">
            Or email us at mediasolutionsja@gmail.com
          </p>
        </div>
      </section>

      {/* Booking Form Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-montserrat font-bold text-gray-800 flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-400" />
              Book Your Wedding Session
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required className="mt-1" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number (WhatsApp)</Label>
                <Input id="phone" type="tel" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="date">Wedding Date</Label>
                <Input id="date" type="date" required className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Wedding Location</Label>
              <Input id="location" required className="mt-1" />
            </div>

            <div>
              <Label htmlFor="package">Selected Package</Label>
              <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Choose a package" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg, index) => (
                    <SelectItem key={index} value={pkg.name}>
                      {pkg.name} - {pkg.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Add-Ons (Select all that apply)</Label>
              <div className="grid grid-cols-1 gap-2 mt-2 max-h-40 overflow-y-auto">
                {addOns.map((addOn, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`addon-${index}`}
                      checked={selectedAddOns.includes(addOn.name)}
                      onCheckedChange={(checked) => handleAddOnChange(addOn.name, checked as boolean)}
                    />
                    <Label htmlFor={`addon-${index}`} className="text-sm">
                      {addOn.name} - {addOn.price}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="requests">Any Special Requests</Label>
              <Textarea id="requests" className="mt-1" rows={3} />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white py-3 rounded-full font-semibold">
              Submit Booking Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Wedding;