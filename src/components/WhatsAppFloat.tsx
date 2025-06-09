
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Show bubble after 45 seconds
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 45000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(bubbleTimer);
    };
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/18763047551", "_blank");
  };

  const closeBubble = () => {
    setShowBubble(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Message Bubble */}
      {showBubble && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-2xl shadow-lg max-w-xs mb-2 animate-fade-in">
          <button 
            onClick={closeBubble}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-gray-700 pr-6">
            💬 Hi there! Need help? Tap here to message us on WhatsApp. Fast replies guaranteed!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse group relative"
        style={{
          animationDuration: '2s',
          animationIterationCount: 'infinite',
        }}
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip for desktop */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-gray-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
