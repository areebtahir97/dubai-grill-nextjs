const testimonials = [
  {
    name: "Sarah Ahmed",
    review:
      "Absolutely amazing food and atmosphere. The mixed grill platter was one of the best I've ever had!",
  },
  {
    name: "David Walker",
    review:
      "Great service and incredible flavors. Perfect place for family dinners and celebrations.",
  },
  {
    name: "Layla Hassan",
    review:
      "The catering service was fantastic. Our guests loved every dish that was served!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24" >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-black text-3xl font-bold text-center mb-16">
          What Our Guests Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition"
            >

              <div className="text-[#B87333] text-xl mb-4">
                ★★★★★
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.review}"
              </p>

              <h4 className="font-semibold text-gray-800">
                {testimonial.name}
              </h4>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}