const locations = [
  {
    city: "Dubai Marina",
    address: "123 Marina Walk, Dubai",
    phone: "+971 55 123 4567"
  },
  {
    city: "Downtown Dubai",
    address: "45 Sheikh Mohammed Blvd",
    phone: "+971 55 987 6543"
  },
  {
    city: "Jumeirah Beach",
    address: "78 Beach Road, Jumeirah",
    phone: "+971 55 456 7890"
  }
]

export default function Locations() {
  return (
    <section className="bg-gray-50 py-24 " style={{
    backgroundImage: "url('/brick-wall-dark.png')",
    backgroundRepeat: "repeat",
    
  }}>

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Find a Dubai Grill Near You
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition"
            >

              <h3 className="text-xl font-semibold mb-3">
                {location.city}
              </h3>

              <p className="text-gray-600 mb-2">
                {location.address}
              </p>

              <p className="text-gray-600">
                {location.phone}
              </p>

            </div>
          ))}

        </div>

        <div className="text-center mt-16">

          <button className="bg-[#B87333] text-white px-8 py-4 rounded hover:opacity-90 transition text-lg hover:-translate-y-2 transition duration-300">
            View All Locations
          </button>

        </div>

      </div>

    </section>
  )
}