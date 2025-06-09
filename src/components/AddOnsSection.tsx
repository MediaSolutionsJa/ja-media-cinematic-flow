
const AddOnsSection = () => {
  const addOnCategories = [
    {
      title: "Personnel & Support Services",
      items: [
        { name: "Complimentary pre-event consultation", price: "FREE" },
        { name: "Additional Cameraman", price: "$25,000" },
        { name: "Additional Technician", price: "$20,000" },
        { name: "Additional Hour", price: "$15,000 per hour" }
      ]
    },
    {
      title: "Audio & PA Systems", 
      items: [
        { name: "PA System 1 (1 Speaker, 1 Wireless Microphone)", price: "$20,000" },
        { name: "PA System 2 (6 Speakers, 4 Microphones)", price: "$60,000" },
        { name: "Remote Speaker Integration", price: "$5,000" },
        { name: "Event DJ", price: "$50,000" }
      ]
    },
    {
      title: "Streaming & Recording Add-Ons",
      items: [
        { name: "Multi-platform Stream (up to 5)", price: "$15,000" },
        { name: "USB Copy", price: "$8,000" }
      ]
    },
    {
      title: "Video Production Extras",
      items: [
        { name: "Highlight Video/Story (2-7 minutes)", price: "$60,000" },
        { name: "Same-Day Edited Highlight Video (2-7 minutes)", price: "$80,000" },
        { name: "Same-Day Highlight Reel (30 seconds)", price: "$25,000" },
        { name: "Personalized Video Tribute (Produced in Advance)", price: "$50,000" },
        { name: "Drone Video/Photo (up to 3 flight sessions)", price: "$30,000" }
      ]
    },
    {
      title: "Photography Services",
      items: [
        { name: "Basic Event Photography (2 hrs, 70 photos delivered digitally)", price: "$25,000" },
        { name: "Full Event Photography (5 hrs, 150 photos delivered digitally)", price: "$60,000" },
        { name: "Photo Slideshow with Music", price: "$10,000" }
      ]
    },
    {
      title: "Visual Display & Projection",
      items: [
        { name: "Projector + 100\" Screen Setup", price: "$35,000" },
        { name: "55\" TV Setup", price: "$35,000" },
        { name: "100\" TV Setup", price: "$80,000" },
        { name: "Projector + 120\" Screen Setup", price: "$45,000" },
        { name: "2.5 mm LED Video Wall (Indoor) 16ft (W) x 9ft (H)", price: "$200,000" },
        { name: "Truss System & Rigging", price: "$30,000" },
        { name: "Video Processor & Control System", price: "$25,000" },
        { name: "Delivery & Setup (Clarendon)", price: "$40,000" },
        { name: "On-site Technician (8 hours)", price: "$20,000" }
      ]
    },
    {
      title: "Lighting & Power",
      items: [
        { name: "Stage Lighting PKG (Basic) (2 Strobe Lights)", price: "$30,000" },
        { name: "Stage Lighting PKG (Advanced) + Trussing", price: "$185,000" },
        { name: "Studio Electricity Generator (4000 W)", price: "$50,000" },
        { name: "Towable Diesel Generator (20,000 W)", price: "$90,000" }
      ]
    },
    {
      title: "Miscellaneous Event Services & Rentals",
      items: [
        { name: "10 ft x 10 ft Pop-Up Tent (White)", price: "$35,000" },
        { name: "Follow Hearse Service", price: "$15,000" },
        { name: "Portable AC Units", price: "$25,000" }
      ]
    }
  ];

  return (
    <section id="addons" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
            Add-On Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your event with our professional add-on services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {addOnCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4">
                    <span className="text-gray-700 flex-1">{item.name}</span>
                    <span className="text-blue-600 font-semibold whitespace-nowrap">{item.price}</span>
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

export default AddOnsSection;
