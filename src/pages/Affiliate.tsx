
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Star, Gift, ExternalLink, CheckCircle, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import FormSuccessModal from "@/components/FormSuccessModal";

const Affiliate = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setShowSuccessModal(true);
        form.reset();
      }
    });
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-green-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border border-green-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-600/20 rotate-12 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <div className="mb-8">
            <DollarSign className="w-20 h-20 mx-auto mb-6 text-green-400 animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-fade-in"> Join the MSJ Affiliate Program</h1>
          
          <p className="text-xl md:text-2xl font-montserrat font-light mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Earn up to <span className="text-yellow-400 font-bold">J$180,000+ per month</span> referring clients to Jamaica's top event live streaming service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button onClick={() => document.getElementById('signup')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              Join Now - Start Earning
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-white hover:bg-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 text-gray-900">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple. Refer clients to Media Solutions JA and earn generous commissions on every booking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat">Refer Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Share Media Solutions JA with friends, family, or businesses who need live streaming services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat">Earn 10% Commission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get 10% commission on every booking. Commissions range from J$6,000 to J$30,000+ per package.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat">Monthly Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn J$30K – J$180K+ monthly just by referring friends, family, or businesses.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Commission Breakdown */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">Commission Breakdown</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <h4 className="font-bold text-lg mb-2">Simple Package</h4>
                <p className="text-gray-600 mb-2">J$40,000</p>
                <p className="text-green-600 font-bold text-xl">J$4,000 Commission</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <h4 className="font-bold text-lg mb-2">Standard Package</h4>
                <p className="text-gray-600 mb-2">J$60,000</p>
                <p className="text-green-600 font-bold text-xl">J$6,000 Commission</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <h4 className="font-bold text-lg mb-2">Premium Package</h4>
                <p className="text-gray-600 mb-2">J$110,000</p>
                <p className="text-green-600 font-bold text-xl">J$11,000 Commission</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-yellow-400">
                <h4 className="font-bold text-lg mb-2">Elite Package</h4>
                <p className="text-gray-600 mb-2">J$400,000</p>
                <p className="text-green-600 font-bold text-xl">J$40,000 Commission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Materials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
              Tools & Materials Provided
            </h2>
            <p className="text-xl text-gray-600">
              Get access to professionally designed promotional materials to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Gift className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-montserrat font-bold">Free Marketing Materials</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Professionally designed promotional flyers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Eye-catching posters and banners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Social media graphics and templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Business cards and referral cards</span>
                </li>
              </ul>
              
              <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105" onClick={() => window.open('https://drive.google.com/drive/folders/1h94dRYYLunhvPGN3Uyukh1PhqfGGO-4u?usp=sharing', '_blank')}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Promo Materials
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-montserrat font-bold mb-4 text-center">Send Referrals To:</h4>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-lg font-bold mb-2">www.mediasolutionsja.com  or  876-304-7551</p>
                <p className="text-gray-600 text-sm">Let your referrals choose a package and mention your name during booking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900">
                Affiliate Program Terms
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Important information about our affiliate partnership program
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Commission Payment</h3>
                    <p className="text-gray-600">
                      Commission is paid after client booking is confirmed and paid in full. 
                      Payments are processed monthly via bank transfer or approved payment methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Program Updates</h3>
                    <p className="text-gray-600">
                      Media Solutions JA reserves the right to update this program anytime. 
                      All affiliates will be notified of any changes via email at least 30 days in advance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Referral Tracking</h3>
                    <p className="text-gray-600">
                      Referrals must mention your name during the booking process. 
                      It's your responsibility to ensure your referred clients provide your information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Professional Conduct</h3>
                    <p className="text-gray-600">
                      All affiliates must represent Media Solutions JA professionally and 
                      provide accurate information about our services and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white">
              Join Now - Start Earning Today!
            </h2>
            <p className="text-xl text-blue-100">
              Fill out the form below to become a Media Solutions JA affiliate partner.
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form action="https://formspree.io/f/xvgrebqr" method="POST" onSubmit={handleFormSubmit} className="space-y-6">
                <input type="hidden" name="form_type" value="affiliate_signup" />
                
                <div>
                  <Label htmlFor="affiliate-name">Full Name *</Label>
                  <Input id="affiliate-name" name="name" required />
                </div>
                
                <div>
                  <Label htmlFor="affiliate-phone">Phone Number *</Label>
                  <Input id="affiliate-phone" name="phone" required />
                </div>
                
                <div>
                  <Label htmlFor="affiliate-email">Email Address *</Label>
                  <Input id="affiliate-email" name="email" type="email" required />
                </div>
                
                <div>
                  <Label htmlFor="affiliate-experience">Previous Marketing/Sales Experience (Optional)</Label>
                  <Input id="affiliate-experience" name="experience" />
                </div>

                <div>
                  <Label htmlFor="affiliate-message">Why do you want to join our affiliate program? (Optional)</Label>
                  <Input id="affiliate-message" name="message" />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Join the MSJ Affiliate Program
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <FormSuccessModal 
        isVisible={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </>
  );
};

export default Affiliate;
