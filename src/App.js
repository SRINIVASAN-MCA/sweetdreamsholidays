
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import TourPackages from './components/TourPackages';
import TopSelling from './components/TopSelling';
import PackageDetails from './components/PackageDetails';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TopSelling />
                <TourPackages />
                <Packages />
                <Testimonial />
                <Contact />
              </>
            }
          />

          <Route path="/package/:slug" element={<PackageDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
