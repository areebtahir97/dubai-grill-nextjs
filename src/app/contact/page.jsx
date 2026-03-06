export default function Contact() {
  return (
    <>

 
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Contact Dubai Grill
          </h1>

          <p className="text-gray-600">
            We'd love to hear from you. Visit one of our locations or send us a message.
          </p>

        </div>

      </section>


 
      <section className="py-20" style={{
    backgroundImage: "url('/arabesque.png')",
    backgroundRepeat: "repeat",
    
  }}>

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Locations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-black text-xl font-semibold mb-2">
                Dubai Marina
              </h3>
              <p className="text-gray-600">123 Marina Walk</p>
              <p className="text-gray-600">Dubai, UAE</p>
              <p className="text-gray-600 mt-2">📞 +971 55 123 4567</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-black text-xl font-semibold mb-2">
                Downtown Dubai
              </h3>
              <p className="text-gray-600">45 Sheikh Mohammed Blvd</p>
              <p className="text-gray-600">Dubai, UAE</p>
              <p className="text-gray-600 mt-2">📞 +971 55 987 6543</p>
            </div>

            <div className="text-black bg-gray-50 p-6 rounded-lg">
              <h3 className="text-black text-xl font-semibold mb-2">
                Jumeirah Beach
              </h3>
              <p className="text-gray-600">78 Beach Road</p>
              <p className="text-gray-600">Dubai, UAE</p>
              <p className="text-gray-600 mt-2">📞 +971 55 456 7890</p>
            </div>

          </div>

        </div>

      </section>



      <section className="bg-gray-50 py-24 " >

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-black text-black text-3xl font-bold text-center mb-10">
            Get In Touch
          </h2>

          <form className="space-y-6">

    
            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded p-3"
              />
            </div>

      
            <div>
              <label className="block mb-2 font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border rounded p-3"
              />
            </div>

      
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded p-3"
              />
            </div>

       
            <div>
              <label className="block mb-2 font-medium">
                Number of Guests
              </label>
              <input
                type="number"
                placeholder="Guests"
                className="w-full border rounded p-3"
              />
            </div>

        
            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border rounded p-3"
              />
            </div>

 
            <button
              type="submit"
              className="bg-[#B87333] text-white px-6 py-3 rounded hover:opacity-90 transition w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </>
  )
}