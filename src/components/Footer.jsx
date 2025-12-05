export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">     
        <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Sweetdreams Holidays. All rights reserved.</p>
        </div>
    </footer>
  );
}