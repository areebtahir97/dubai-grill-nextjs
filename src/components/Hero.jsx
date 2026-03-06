import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh]">

     
      <Image
        src="/hero.jpg"
        alt="restaurant"
        fill
        priority
        className="object-cover"
      />

    
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Dubai Grill
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Discover bold flavors, authentic grills, and unforgettable dining experiences.
        </p>

        <Link href='/contact' className="bg-white text-black px-6 py-3 font-medium rounded hover:bg-gray-200 hover:-translate-y-2 transition duration-300">
          Get in Touch
        </Link>

      </div>

    </section>
  )
}