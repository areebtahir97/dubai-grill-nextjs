import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    name: "Signature Mixed Grill",
    image: "/menu/grill2.jpg",
    description: "A flavorful selection of grilled meats served with warm pita and house sauces.",
    price: "$24"
  },
  {
    name: "Smoked BBQ Ribs",
    image: "/menu/ribs2.jpg",
    description: "Slow cooked ribs glazed with our signature smoky barbecue sauce.",
    price: "$22"
  },
  {
    name: "Mediterranean Chicken Bowl",
    image: "/menu/chicken.jpg",
    description: "Grilled chicken with fresh vegetables, herbs and aromatic rice.",
    price: "$18"
  },
  {
    name: "Spiced Lamb Skewers",
    image: "/menu/lamb.jpg",
    description: "Tender lamb skewers marinated with traditional Middle Eastern spices.",
    price: "$21"
  },
  {
    name: "Grilled Salmon",
    image: "/menu/salmon2.jpg",
    description: "Fresh salmon fillet grilled to perfection with lemon herb butter.",
    price: "$23"
  },
  {
    name: "Falafel Platter",
    image: "/menu/falafel.jpg",
    description: "Crispy falafel served with hummus, tahini sauce and warm flatbread.",
    price: "$16"
  }
]

export default function Menu() {
  return (
    <section className="bg-gray-50 py-24 " style={{
    backgroundImage: "url('/food.png')",
    backgroundRepeat: "repeat",
    
  }}>

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Favorite Dishes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <span className="text-[#B87333] font-medium">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

    
        <div className="text-center mt-16">

          <Link
            href="/menu"
            className="bg-[#B87333] text-white px-8 py-4 rounded hover:opacity-90 transition text-lg inline-block">
            Explore Our Full Menu 
          </Link>

        </div>

      </div>

    </section>
  )
}