
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";

interface FormSuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const FormSuccessModal = ({ isVisible, onClose }: FormSuccessModalProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true);
      // Auto-hide confetti after animation
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-scale-in">
        <div className="bg-gradient-to-r from-blue-600 to-green-500 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <CheckCircle className="w-16 h-16 text-white animate-pulse" />
              <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-2 -right-2 animate-spin" />
            </div>
          </div>
          <h2 className="text-2xl font-montserrat font-bold text-white mb-2">
            Thank You for Submitting!
          </h2>
          <p className="text-blue-100 font-montserrat">
            Your message has been received. Our team will be in touch shortly.
          </p>
        </div>

        <div className="p-6 text-center">
          <p className="text-gray-600 mb-6 font-montserrat">
            We typically respond within 2 business hours. Get ready to make your event unforgettable!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => {
                window.scrollTo(0, 0);
                onClose();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
            >
              Back to Homepage
            </Button>
            <Button 
              onClick={() => scrollToSection("services")}
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 flex-1"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuccessModal;
