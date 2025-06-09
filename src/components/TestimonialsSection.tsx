
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Media Solutions JA captured our wedding beautifully. The live stream allowed our family overseas to be part of our special day. Professional and reliable!",
      name: "Janice Brown",
      event: "Wedding",
      location: "Kingston",
      date: "May 2024"
    },
    {
      quote: "Excellent service for our corporate conference. The multi-camera setup and professional audio made our event look world-class. Highly recommended!",
      name: "Marcus Thompson",
      event: "Corporate Conference",
      location: "Montego Bay",
      date: "March 2024"
    },
    {
      quote: "During a difficult time, they handled our memorial service with such care and professionalism. The live stream meant everything to our family members who couldn't attend.",
      name: "Grace Williams",
      event: "Memorial Service",
      location: "St. Ann",
      date: "January 2024"
    },
    {
      quote: "The drone footage of our graduation ceremony was absolutely stunning. Media Solutions JA exceeded all our expectations with their creativity and technical expertise.",
      name: "Dr. Patricia Clarke",
      event: "Graduation Ceremony",
      location: "Kingston",
      date: "December 2023"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients across Jamaica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 leading-relaxed italic text-lg">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">
                  {testimonial.event} • {testimonial.location} • {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
