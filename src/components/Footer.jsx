import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

 
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Dubai Grill
          </h2>

          <p className="text-gray-400">
            Bringing authentic grilled flavors and warm hospitality to every
            table.
          </p>
        </div>

  
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/menu" className="hover:text-white transition">
                Menu
              </Link>
            </li>

            <li>
              <Link href="/catering" className="hover:text-white transition">
                Catering
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <p>123 Grill Street</p>
          <p>Dubai Marina</p>
          <p className="mt-2">+971 55 123 4567</p>
          <p>info@dubaigrill.com</p>

        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dubai Grill. All rights reserved.
      </div>

    </footer>
  )
}