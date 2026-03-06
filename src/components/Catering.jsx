import Image from "next/image"
import Link from "next/link"

export default function Catering() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">


          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/catering.jpg"
              alt="Catering service"
              fill
              className="object-cover"
            />
          </div>


          <div>

            <h2 className="text-4xl font-bold mb-6">
              Catering for Every Occasion
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              From corporate events to family celebrations, Dubai Grill offers
              premium catering services featuring our signature grilled dishes,
              fresh ingredients, and authentic flavors.
            </p>

            <p className="text-gray-600 mb-8">
              Let us bring the taste of Dubai Grill to your next event.
            </p>

            <Link href='/catering' className="bg-[#B87333] text-white px-6 py-3 rounded hover:opacity-90 hover:-translate-y-2 transition duration-300">
              Request Catering
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}