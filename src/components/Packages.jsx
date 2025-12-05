import PackageCard from "./PackageCard";

export default function Packages() {
  const data = [
    {
      title: "Ooty & Coonoor",
      price: "8,999",
      days: "3 Days / 2 Nights",
      image: "https://images.unsplash.com/photo-1541417904950-b855846fe074"
    },
    {
      title: "Kodaikanal",
      price: "9,499",
      days: "3 Days / 2 Nights",
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
    },
    {
      title: "Mysore – Coorg",
      price: "13,500",
      days: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1593693397690-471b681eafa8"
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Domestic Packages
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              days={pkg.days}
              image={pkg.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
