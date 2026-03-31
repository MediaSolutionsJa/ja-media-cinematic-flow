import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type AddOnDetail = { category: string; name: string; price: string } | null;

const AddOnsSection = () => {
  const [selectedAddOn, setSelectedAddOn] = useState<AddOnDetail>(null);

  const addOnCategories = [
    {
      title: "Personnel & Support Services",
      items: [
        { name: "Complimentary pre-event consultation", price: "FREE" },
        { name: "Additional Cameraman", price: "$25,000" },
        { name: "Additional Technician", price: "$20,000" },
        { name: "Additional Hour", price: "$15,000 per hour" },
      ],
    },
    {
      title: "Audio & PA Systems",
      items: [
        { name: "PA System 1 (1 Speaker, 1 Wireless Microphone)", price: "$20,000" },
        { name: "PA System 2 (6 Speakers, 4 Microphones)", price: "$60,000" },
        { name: "Remote Speaker Integration", price: "$5,000" },
        { name: "Event DJ", price: "$50,000" },
      ],
    },
    {
      title: "Streaming & Recording Add-Ons",
      items: [
        { name: "Multi-platform Stream (up to 5)", price: "$15,000" },
        { name: "USB Copy", price: "$8,000" },
      ],
    },
    {
      title: "Video Production Extras",
      items: [
        { name: "Highlight Video/Story (2-7 minutes)", price: "$60,000" },
        { name: "Same-Day Edited Highlight Video (2-7 minutes)", price: "$80,000" },
        { name: "Same-Day Highlight Reel (30 seconds)", price: "$25,000" },
        { name: "Personalized Video Tribute (Produced in Advance)", price: "$50,000" },
        { name: "Drone Video/Photo (up to 3 flight sessions)", price: "$30,000" },
      ],
    },
    {
      title: "Photography Services",
      items: [
        { name: "Basic Event Photography (2 hrs, 70 photos delivered digitally)", price: "$25,000" },
        { name: "Full Event Photography (5 hrs, 150 photos delivered digitally)", price: "$60,000" },
        { name: "Photo Slideshow with Music", price: "$10,000" },
      ],
    },
    {
      title: "Visual Display & Projection",
      items: [
        { name: 'Projector + 100" Screen Setup', price: "$35,000" },
        { name: '55" TV Setup', price: "$35,000" },
        { name: '75" TV Setup', price: "$50,000" },
        { name: '100" TV Setup', price: "$80,000" },
        { name: 'Projector + 120" Screen Setup', price: "$45,000" },
        { name: '2 mm Indoor LED Video Panel (16ft W x 9ft H) 16:9 Screen (after discount)', price: "$234,000" },
        { name: "Media Server + Windows Laptop + Cables & Accessories", price: "$39,000" },
        { name: "Trussing Structure for LED Screen", price: "$40,000" },
        { name: "LED Screen Equipment Package Total", price: "$313,000" },
      ],
    },
    {
      title: "Production Crew & Logistics",
      items: [
        { name: "Production Team (Programmer, LED Technicians, Electrician/Gaffer)", price: "$120,500" },
        { name: "Production Meals", price: "From $8,000" },
        { name: "Transportation (24ft Box Truck, per mile, toll included)", price: "$1,725 per mile" },
        { name: "Typical Logistics Total (based on prior scope)", price: "$173,760" },
        { name: "Estimated Total with GCT (15%)", price: "$698,349" },
      ],
    },
    {
      title: "Lighting & Power",
      items: [
        { name: "Stage Lighting PKG (Basic) (2 Strobe Lights)", price: "$30,000" },
        { name: "Stage Lighting PKG (Advanced) + Trussing", price: "$185,000" },
        { name: "Studio Electricity Generator (4000 W)", price: "$50,000" },
        { name: "Towable Diesel Generator (20,000 W)", price: "$90,000" },
      ],
    },
    {
      title: "Miscellaneous Event Services & Rentals",
      items: [
        { name: "10 ft x 10 ft Pop-Up Tent (White)", price: "$35,000" },
        { name: "Follow Hearse Service", price: "$15,000" },
        { name: "Portable AC Units", price: "$25,000" },
      ],
    },
  ];

  return (
    <>
      <section id="addons" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Add-On Services</p>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-5 text-gray-900">Customize Your Production</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enhance your event with professional add-on services tailored to your production goals.</p>
            <p className="text-sm text-gray-500 max-w-4xl mx-auto mt-4">
              LED wall pricing reflects the latest production quote scope and includes updated equipment, crew, logistics, and tax-aligned totals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {addOnCategories.map((category) => (
              <div key={category.title} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-900 border-b border-slate-200 pb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedAddOn({ category: category.title, name: item.name, price: item.price })}
                      className="w-full rounded-lg border border-transparent hover:border-blue-200 hover:bg-white flex justify-between items-start gap-4 p-3 text-left transition-colors"
                    >
                      <span className="text-gray-700 flex-1">{item.name}</span>
                      <span className="text-blue-600 font-semibold whitespace-nowrap">{item.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedAddOn} onOpenChange={(open) => !open && setSelectedAddOn(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedAddOn?.name}</DialogTitle>
            <DialogDescription className="pt-2 text-base">
              {selectedAddOn?.category} • {selectedAddOn?.price}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-gray-600 leading-relaxed">
            This add-on can be bundled with your selected package during booking. Choose your package first, then include this option in your quote request.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddOnsSection;
