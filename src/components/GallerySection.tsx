
import { Play } from "lucide-react";

const GallerySection = () => {
  const galleryItems = [
    {
      category: "Drone Coverage",
      videos: [
        { url: "https://youtu.be/u-CCV0a2Oyk", title: "Aerial Event Coverage" },
        { url: "https://youtu.be/AJ07P0QQ16M", title: "Drone Cinematography" }
      ]
    },
    {
      category: "Elegant Wedding Coverage",
      videos: [
        { url: "https://youtu.be/SWlvBA2vaZ8", title: "Wedding Ceremony" },
        { url: "https://youtu.be/bI255YqePkQ", title: "Wedding Reception" },
        { url: "https://youtu.be/Zr4xs5NB7fw", title: "Wedding Highlights" }
      ]
    },
    {
      category: "Corporate Event Excellence",
      videos: [
        { image: "/lovable-uploads/38e513f1-ed55-43ad-8ca9-c10f7c5ccd2b.png", title: "Corporate Conference Coverage" }
      ]
    },
    {
      category: "Graduation Celebration",
      videos: [
        { url: "https://youtu.be/4NVzJOGkZMI", title: "Graduation Ceremony" },
        { url: "https://youtu.be/0wEjJQg1T6g", title: "Graduation Highlights" }
      ]
    },
    {
      category: "Memorial Service",
      videos: [
        { url: "https://www.youtube.com/live/IkKEW5b1b7A", title: "Memorial Service Live Stream" },
        { url: "https://www.youtube.com/live/4GIDTnypxao", title: "Memorial Service Coverage" },
        { url: "https://youtu.be/XDJ8P4LDzTE", title: "Memorial Service Video" }
      ]
    },
    {
      category: "Memorial Service Highlights",
      videos: [
        { url: "https://youtu.be/IOdlvTHWH3s", title: "Memorial Highlights 1" },
        { url: "https://youtu.be/UUcxqx-sp8U", title: "Memorial Highlights 2" },
        { url: "https://youtu.be/gPsI8y6eqx4", title: "Memorial Highlights 3" }
      ]
    }
  ];

  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and professionalism that sets us apart
          </p>
        </div>

        <div className="space-y-16">
          {galleryItems.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-montserrat font-bold mb-8 text-gray-900 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {video.image ? (
                      <img 
                        src={video.image} 
                        alt={video.title}
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <div 
                        className="relative cursor-pointer"
                        onClick={() => openVideo(video.url!)}
                      >
                        <img 
                          src={getYouTubeThumbnail(video.url!)} 
                          alt={video.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-gray-900" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
