import React from "react";

export default function TourPackages() {
  const packages = [
    {
      title: "Goa 3 Days Package",
      desc: "Enjoy beaches, nightlife & sightseeing.",
      img: "/assets/images/Best-Places-to-visit-in-Goa-in-3-Days-Tour.jpg",
      link: "goa-package.html",
    },
    {
      title: "Ooty & Coonoor 2 Days",
      desc: "Beautiful hills & nature landscapes.",
      img: "/assets/images/maxresdefault.jpg",
      link: "ooty-package.html",
    },
    {
      title: "Kerala 4 Days",
      desc: "Backwaters, Munnar tea gardens & more.",
      img: "/assets/images/CochinMunnarAlleppeyPrivateMulti-DayTour.jpg",
      link: "kerala-package.php",
    },
  ];

  return (
         <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
        Our Tour Packages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={pkg.img}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h5 className="text-xl font-semibold">{pkg.title}</h5>
              <p className="text-gray-600 mt-1">{pkg.desc}</p>

              <a
                href={pkg.link}
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
