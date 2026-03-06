import Image from "next/image"

export default function CateringPage() {
  return (
    <>

      {/* Hero */}
      <section className="relative h-[45vh] w-full">

        <Image
          src="/catering.jpg"
          alt="Catering service"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Catering Services
          </h1>
        </div>

      </section>


      {/* Intro */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Exceptional Catering for Every Occasion
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Dubai Grill offers premium catering services for events of all
            sizes. Whether you're planning a corporate gathering, wedding,
            birthday celebration, or private party, our team will deliver
            delicious food and exceptional service to make your event
            unforgettable.
          </p>

        </div>

      </section>


      {/* Event Types */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Perfect for Any Event
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                Corporate Events
              </h3>
              <p className="text-gray-600">
                Impress your guests and colleagues with professionally
                prepared dishes and reliable catering service.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                Weddings & Celebrations
              </h3>
              <p className="text-gray-600">
                From elegant receptions to large celebrations, our catering
                team ensures every detail is perfect.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                Private Parties
              </h3>
              <p className="text-gray-600">
                Celebrate birthdays, anniversaries, and special moments
                with a customized catering experience.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Catering Form */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Request Catering
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                className="w-full border rounded p-3"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                className="w-full border rounded p-3"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded p-3"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Number of Guests
              </label>
              <input
                type="number"
                className="w-full border rounded p-3"
                placeholder="Guests"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Event Details
              </label>
              <textarea
                rows="4"
                className="w-full border rounded p-3"
                placeholder="Tell us about your event..."
              ></textarea>
            </div>

            <button
              className="bg-[#B87333] text-white px-6 py-3 rounded hover:opacity-90 transition w-full"
            >
              Submit Catering Request
            </button>

          </form>

        </div>

      </section>

    </>
  )
}