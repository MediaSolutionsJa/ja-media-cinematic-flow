import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const OurWork = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/cbcc3ac8-319d-4c3b-89aa-9f4155f24f1a.png",
      alt: "Cruise ship at sunset - event coverage",
      category: "Event Coverage"
    },
    {
      src: "/lovable-uploads/e5b11de6-8e92-4e8b-a7ca-6dc9fed6c22f.png", 
      alt: "Radiant bride with bouquet",
      category: "Wedding Photography"
    },
    {
      src: "/lovable-uploads/f9b73284-1c19-49e3-9c30-760b258fd07b.png",
      alt: "Elegant bridal portrait on stairs",
      category: "Wedding Photography"
    },
    {
      src: "/lovable-uploads/6ab636cb-7ee4-492a-acb8-3eb4b42c424a.png",
      alt: "Aerial view of couple on grass",
      category: "Wedding Photography"
    },
    {
      src: "/lovable-uploads/fd7da9c0-7aa7-40d0-aa4e-9f4a23af30c2.png",
      alt: "Bride with floral hair accessories",
      category: "Bridal Portraits"
    },
    {
      src: "/lovable-uploads/80c5aaaa-4b80-4d28-89c5-ae48df6b8da6.png",
      alt: "Bridesmaids surrounding bride",
      category: "Wedding Photography"
    },
    {
      src: "/lovable-uploads/31d608f1-f2a9-478a-9413-9057d67cc6ba.png",
      alt: "Bride getting ready with bridesmaids",
      category: "Getting Ready"
    },
    {
      src: "/lovable-uploads/a5864377-4ee8-4fec-bcc3-7a14b31980bc.png",
      alt: "Wedding party group photo",
      category: "Wedding Photography"
    },
    {
      src: "/lovable-uploads/1c1c1173-d805-4298-bf71-3656298c6ef2.png",
      alt: "Elegant bridal jewelry detail",
      category: "Detail Shots"
    },
    {
      src: "/lovable-uploads/fa0c4409-9e5c-4328-af71-7be54c490bba.png",
      alt: "Bride admiring her wedding dress",
      category: "Getting Ready"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <span className="text-sm font-medium px-3 py-1 bg-primary rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Work
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Media Solutions JA, we take pride in capturing the moments that matter most. 
              Browse our portfolio below to see the quality and care we bring to every livestream, 
              event, and production.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-lg font-medium">{images[selectedImage].category}</p>
            <p className="text-sm text-gray-300 mt-1">
              {selectedImage + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWork;