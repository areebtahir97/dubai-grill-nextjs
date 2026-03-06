import Image from "next/image"

const brands = [
  {
    name: "Dubai Grill",
    image: "/brands/grill.jpg",
    description: "Authentic grilled cuisine with bold Middle Eastern flavors."
  },
  {
    name: "Desert Flame BBQ",
    image: "/brands/bbq.jpg",
    description: "Slow cooked meats and smoky barbecue specialties."
  },
  {
    name: "Oasis Kitchen",
    image: "/brands/kitchen.jpg",
    description: "Fresh ingredients and modern Mediterranean dishes."
  },
  {
    name: "Arabian Spice House",
    image: "/brands/spice.jpg",
    description: "Traditional spices blended into rich and aromatic meals."
  }
]

export default function Brands() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Restaurants
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <div className="relative h-48">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">

                <h3 className="text-xl font-semibold mb-2">
                  {brand.name}
                </h3>

                <p className="text-gray-600 text-sm">
                  {brand.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}