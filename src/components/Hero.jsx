export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-75 p-10 rounded-lg text-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Discover Your Dream Vacation</h2>
            <p className="text-gray-700 mb-6">Explore the world's most beautiful destinations with Sweetdreams Holidays. Unforgettable experiences await!</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">Explore Packages</button>
        </div>
    </section>
  );
}