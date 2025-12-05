import React from "react";

export default function TopSelling() {
  const trips = [
    {
      title: "Ooty – Kodaikanal Delight",
      days: "5 Days",
      price: "₹16,499",
      img: "/assets/images/ooty-or-kodaikanal.jpg",
      desc: "A refreshing hill-station escape covering Ooty lake, botanical gardens, Kodai lake, waterfalls & more.",
    },
    {
      title: "Golden Triangle – Delhi, Agra, Jaipur",
      days: "6 Days",
      price: "₹18,999",
      img: "/assets/images/Golden-Triangle-Delhi-Agra-Jaipur-Tour.jpg",
      desc: "India’s classic cultural trail. Visit Taj Mahal, Jaipur Forts, Qutub Minar, India Gate & more.",
    },
    {
      title: "Goa Beach Getaway",
      days: "4 Days",
      price: "₹12,999",
      img: "/assets/images/Vacation.jpg",
      desc: "Relax on sandy beaches, nightlife, water sports & island tours — perfect for couples & families.",
    },
  ];

  return (
       <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}
        <div className="mb-8 text-left">
          <h1 className="text-3xl font-bold">Top Selling Domestic Trips</h1>
          <p className="text-gray-600">
            Most booked and popular tours chosen by travellers
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trips.map((trip, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <img
                src={trip.img}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h5 className="text-lg font-bold">{trip.title}</h5>
                <p className="text-sm font-semibold mt-1">{trip.days}</p>

                <p className="text-blue-600 font-bold text-lg mt-2">
                  {trip.price}
                </p>

                <p className="text-gray-600 text-sm mt-2">{trip.desc}</p>

                <a
                  href="#packages"
                  className="mt-4 block text-center border border-blue-600 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
