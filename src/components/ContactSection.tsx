
import { Phone, Mail, MapPin, Youtube, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/f39eac11-6112-488d-a596-eea0f6892264.png" 
                alt="Media Solutions JA Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-montserrat font-bold">Media Solutions JA</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Media Solutions JA provides high-quality live streaming and media production across Jamaica. 
              From intimate events to large celebrations, we deliver with professionalism, precision, and heart.
            </p>
            <p className="text-sm text-blue-400 font-montserrat font-light">
              Lights. Camera. Solutions
            </p>
            <p className="text-lg text-gray-200 mt-2">
              Excellence in Media Production
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a 
                href="tel:+18763047551" 
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                876-304-7551
              </a>
              <a 
                href="mailto:mediasolutionsja@gmail.com" 
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                mediasolutionsja@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                Serving Jamaica Island-wide
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Follow Us</h3>
            <div className="space-y-4">
              <a 
                href="https://www.youtube.com/@MediaSolutionsJa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
              <a 
                href="https://instagram.com/MediaSolutionsJa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a 
                href="https://tiktok.com/@mediasolutionsja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                TikTok
              </a>
              <a 
                href="https://facebook.com/mediasolutionsja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Media Solutions JA. All rights reserved.</p>
          <p className="mt-2 text-sm">
            High-quality live streaming and media production services across Jamaica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
