
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Minus } from "lucide-react";

const BookingForm = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [addOns, setAddOns] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const packages = [
    { name: "Simple Package - $40,000", price: 40000 },
    { name: "Standard Package - $60,000", price: 60000 },
    { name: "Premium Package - $110,000", price: 110000 },
    { name: "Elite Videography Package - $400,000", price: 400000 }
  ];

  const addOnItems = [
    { name: "Complimentary Pre-event Consultation", price: 0, maxQty: 1 },
    { name: "Additional Cameraman", price: 25000 },
    { name: "Additional Technician", price: 20000 },
    { name: "Additional Hour", price: 15000 },
    { name: "PA System 1", price: 20000 },
    { name: "PA System 2", price: 60000 },
    { name: "Remote Speaker Integration", price: 5000 },
    { name: "Event DJ", price: 50000 },
    { name: "Multi-platform Stream", price: 15000 },
    { name: "USB Copy", price: 8000 },
    { name: "Highlight Video/Story", price: 60000 },
    { name: "Same-Day Edited Highlight Video", price: 80000 },
    { name: "Same-Day Highlight Reel", price: 25000 },
    { name: "Personalized Video Tribute", price: 50000 },
    { name: "Drone Video/Photo", price: 30000 },
    { name: "Basic Event Photography", price: 25000 },
    { name: "Full Event Photography", price: 50000 },
    { name: "Photo Slideshow with Music", price: 10000 },
    { name: "Projector + 100\" Screen Setup", price: 35000 },
    { name: "55\" TV Setup", price: 35000 },
    { name: "100\" TV Setup", price: 85000 },
    { name: "120\" Projector Screen", price: 15000 },
    { name: "2.5 mm LED Video Wall 16ft (W) x 9ft (H)", price: 315000 },
    { name: "Stage Lighting (Basic)", price: 30000 },
    { name: "Stage Lighting (Advanced)", price: 185000 },
    { name: "Generator (7000 W)", price: 50000 },
    { name: "Towable Diesel Generator (20,000 W)", price: 90000 },
    { name: "Portable AC Units", price: 25000 },
    { name: "Tent", price: 35000 },
    { name: "Follow Hearse", price: 15000 }
  ];

  const updateAddOn = (name: string, change: number) => {
    const item = addOnItems.find(item => item.name === name);
    const maxQty = item?.maxQty || 10;
    
    setAddOns(prev => {
      const current = prev[name] || 0;
      const newValue = Math.max(0, Math.min(maxQty, current + change));
      if (newValue === 0) {
        const { [name]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: newValue };
    });
  };

  const calculateTotal = () => {
    const packagePrice = packages.find(p => p.name === selectedPackage)?.price || 0;
    const addOnTotal = Object.entries(addOns).reduce((total, [name, qty]) => {
      const item = addOnItems.find(item => item.name === name);
      return total + (item?.price || 0) * qty;
    }, 0);
    return packagePrice + addOnTotal;
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
              Book Your Event
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 2 business hours
            </p>
          </div>

          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-8 text-center">
              Thank you! We'll get back to you within 2 business hours.
            </div>
          )}

          <form action="https://formspree.io/f/xzzgejrb" method="POST" onSubmit={handleFormSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="client-name">Client Name *</Label>
                <Input id="client-name" name="client_name" required />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" required />
              </div>
              <div>
                <Label htmlFor="event-date">Event Date *</Label>
                <Input id="event-date" name="event_date" type="date" required />
              </div>
              <div>
                <Label htmlFor="start-time">Start Time *</Label>
                <Input id="start-time" name="start_time" type="time" required />
              </div>
              <div>
                <Label htmlFor="event-type">Type of Event *</Label>
                <select name="event_type" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="funeral">Funeral</option>
                  <option value="graduation">Graduation</option>
                  <option value="corporate">Corporate</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="location">Event Location *</Label>
              <Input id="location" name="event_location" required />
            </div>

            {/* Package Selection */}
            <div>
              <Label htmlFor="package-select">Select Package *</Label>
              <select 
                name="selected_package" 
                value={selectedPackage} 
                onChange={(e) => setSelectedPackage(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Choose your package</option>
                {packages.map((pkg) => (
                  <option key={pkg.name} value={pkg.name}>
                    {pkg.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Add-ons */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Add-On Services</Label>
              <div className="grid md:grid-cols-2 gap-4 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
                {addOnItems.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <span className="text-sm font-medium">{item.name}</span>
                      <div className="text-sm text-gray-600">
                        ${item.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => updateAddOn(item.name, -1)}
                        disabled={!addOns[item.name]}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{addOns[item.name] || 0}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => updateAddOn(item.name, 1)}
                        disabled={addOns[item.name] >= (item.maxQty || 10)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <Label htmlFor="additional-details">Additional Details / Special Requests</Label>
              <Textarea 
                id="additional-details" 
                name="additional_details"
                placeholder="Tell us about any specific requirements for your event..."
                rows={4}
              />
            </div>

            {/* WhatsApp Agreement */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="whatsapp-agreement" name="whatsapp_agreement" value="yes" />
              <Label htmlFor="whatsapp-agreement" className="text-sm">
                I agree to receive event updates via WhatsApp
              </Label>
            </div>

            {/* Cost Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Estimated Cost Summary</h3>
              {selectedPackage && (
                <div className="flex justify-between mb-2">
                  <span>Package:</span>
                  <span>${packages.find(p => p.name === selectedPackage)?.price.toLocaleString()}</span>
                </div>
              )}
              {Object.entries(addOns).map(([name, qty]) => {
                const item = addOnItems.find(item => item.name === name);
                if (!item || qty === 0) return null;
                return (
                  <div key={name} className="flex justify-between mb-2">
                    <span>{name} (x{qty}):</span>
                    <span>${(item.price * qty).toLocaleString()}</span>
                  </div>
                );
              })}
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>${calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Hidden fields for form submission */}
            <input type="hidden" name="estimated_total" value={calculateTotal()} />
            <input type="hidden" name="selected_addons" value={JSON.stringify(addOns)} />

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
              Request a Booking
            </Button>

            <p className="text-sm text-gray-600 text-center">
              We operate from Ocho Rios and Kingston; please include your event's location so we can give you accurate travel details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
