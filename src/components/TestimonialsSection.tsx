import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<{ name: string; quote: string; meta: string } | null>(null);

  const testimonials = [
    {
      quote:
        "Media Solutions JA captured our wedding beautifully. The live stream allowed our family overseas to be part of our special day. Professional and reliable!",
      name: "Janice Brown",
      event: "Wedding",
      location: "Kingston",
      date: "May 2024",
    },
    {
      quote:
        "Excellent service for our corporate conference. The multi-camera setup and professional audio made our event look world-class. Highly recommended!",
      name: "Marcus Thompson",
      event: "Corporate Conference",
      location: "Montego Bay",
      date: "March 2024",
    },
    {
      quote:
        "During a difficult time, they handled our memorial service with such care and professionalism. The live stream meant everything to our family members who couldn't attend.",
      name: "Grace Williams",
      event: "Memorial Service",
      location: "St. Ann",
      date: "January 2024",
    },
    {
      quote:
        "The drone footage of our graduation ceremony was absolutely stunning. Media Solutions JA exceeded all our expectations with their creativity and technical expertise.",
      name: "Dr. Patricia Clarke",
      event: "Graduation Ceremony",
      location: "Kingston",
      date: "December 2023",
    },
  ];

  return (
    <>
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it - hear from our satisfied clients across Jamaica.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => {
              const meta = `${testimonial.event} • ${testimonial.location} • ${testimonial.date}`;
              return (
                <button
                  key={testimonial.name + testimonial.date}
                  onClick={() => setActiveTestimonial({ name: testimonial.name, quote: testimonial.quote, meta })}
                  className="text-left bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="mb-5">
                    <div className="text-4xl text-blue-600 mb-3">“</div>
                    <p className="text-gray-700 leading-relaxed italic text-lg line-clamp-4">{testimonial.quote}</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{meta}</div>
                    <div className="text-xs text-blue-600 mt-2 font-medium">Tap to read full story</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={!!activeTestimonial} onOpenChange={(open) => !open && setActiveTestimonial(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{activeTestimonial?.name}</DialogTitle>
            <DialogDescription>{activeTestimonial?.meta}</DialogDescription>
          </DialogHeader>
          <p className="text-gray-700 leading-relaxed italic">“{activeTestimonial?.quote}”</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TestimonialsSection;
