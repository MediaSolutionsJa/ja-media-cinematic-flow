
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Heart, Check } from "lucide-react";

interface WeddingBookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
  packages: Array<{
    id: string;
    title: string;
    price: string;
  }>;
  addOns: Array<{
    name: string;
    price: string;
  }>;
}

const WeddingBookingForm = ({ isOpen, onClose, selectedPackage, packages, addOns }: WeddingBookingFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    weddingDate: "",
    weddingLocation: "",
    selectedPackage: selectedPackage,
    selectedAddOns: [] as string[],
    specialNotes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Wedding Booking Request

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Wedding Date: ${formData.weddingDate}
Wedding Location: ${formData.weddingLocation}
Selected Package: ${packages.find(p => p.id === formData.selectedPackage)?.title || 'Not selected'}
Selected Add-Ons: ${formData.selectedAddOns.join(', ') || 'None'}
Special Notes: ${formData.specialNotes}
    `;

    // Create mailto link
    const mailtoLink = `mailto:mediasolutionsja@gmail.com?subject=Wedding Booking Request - ${formData.fullName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        weddingDate: "",
        weddingLocation: "",
        selectedPackage: "",
        selectedAddOns: [],
        specialNotes: ""
      });
    }, 3000);
  };

  const handleAddOnToggle = (addOnName: string) => {
    setFormData(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(addOnName)
        ? prev.selectedAddOns.filter(name => name !== addOnName)
        : [...prev.selectedAddOns, addOnName]
    }));
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you for submitting!</h3>
            <p className="text-gray-600 mb-4">Your story begins here. ❤️</p>
            <p className="text-sm text-gray-500">We'll be in touch shortly.</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-montserrat font-bold text-gray-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-amber-500" />
            Book Your Wedding Session
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number (WhatsApp) *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="weddingDate">Wedding Date *</Label>
              <Input
                id="weddingDate"
                type="date"
                value={formData.weddingDate}
                onChange={(e) => setFormData(prev => ({ ...prev, weddingDate: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="weddingLocation">Wedding Location *</Label>
            <Input
              id="weddingLocation"
              value={formData.weddingLocation}
              onChange={(e) => setFormData(prev => ({ ...prev, weddingLocation: e.target.value }))}
              required
              className="mt-1"
            />
          </div>

          {/* Package Selection */}
          <div>
            <Label htmlFor="selectedPackage">Selected Package *</Label>
            <select
              id="selectedPackage"
              value={formData.selectedPackage}
              onChange={(e) => setFormData(prev => ({ ...prev, selectedPackage: e.target.value }))}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
            >
              <option value="">Choose your package</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.title} - {pkg.price}
                </option>
              ))}
            </select>
          </div>

          {/* Add-Ons */}
          <div>
            <Label>Add-Ons (Optional)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 max-h-40 overflow-y-auto border rounded-md p-3">
              {addOns.map((addon) => (
                <div key={addon.name} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={addon.name}
                    checked={formData.selectedAddOns.includes(addon.name)}
                    onChange={() => handleAddOnToggle(addon.name)}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  />
                  <Label htmlFor={addon.name} className="text-sm font-normal cursor-pointer">
                    {addon.name} - {addon.price}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Special Notes */}
          <div>
            <Label htmlFor="specialNotes">Special Notes or Requests</Label>
            <Textarea
              id="specialNotes"
              value={formData.specialNotes}
              onChange={(e) => setFormData(prev => ({ ...prev, specialNotes: e.target.value }))}
              rows={3}
              className="mt-1"
              placeholder="Tell us about your vision, special requirements, or any questions you have..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Submit Booking Request
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you're taking the first step toward capturing your perfect wedding day. We'll respond within 24 hours!
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WeddingBookingForm;
