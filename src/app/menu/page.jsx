import Image from "next/image"

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
  },
  {
    name: "Chicken Shawarma Plate",
    image: "/menu/shawarma.jpg",
    description: "Juicy shawarma served with garlic sauce, rice and fresh salad.",
    price: "$19"
  },
  {
    name: "Beef Kofta Kebab",
    image: "/menu/kofta.jpg",
    description: "Grilled minced beef kebabs seasoned with herbs and spices.",
    price: "$20"
  },
  {
    name: "Grilled Prawn Skewers",
    image: "/menu/prawns.jpg",
    description: "Succulent prawns grilled with lemon and Mediterranean spices.",
    price: "$25"
  },
  {
    name: "Hummus & Pita",
    image: "/menu/hummus.jpg",
    description: "Creamy hummus served with warm freshly baked pita bread.",
    price: "$12"
  }
]

export default function MenuPage() {
  return (
    <section className="py-24 " style={{
    backgroundImage: "url('/food.png')",
    backgroundRepeat: "repeat",
    
  }}>

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          Our Menu
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
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

      </div>

    </section>
  )
}