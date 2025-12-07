
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopBar from './layout/TopBar';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
// import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import TourPackages from './components/TourPackages';
import TopSelling from './components/TopSelling';
import PackageDetails from './components/PackageDetails';
import DomesticTours from './components/DomesticTours';
import InternationalTours from './components/InternationalTours';
import AboutUs from './components/AboutUs';
import FloatingButtons from './components/FloatingButtons';

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
                {/* <Packages /> */}
                <Testimonial />
                <Contact />
              </>
            }
          />

          <Route path="/domestic" element={<DomesticTours />} />
          <Route path="/international" element={<InternationalTours />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package/:slug" element={<PackageDetails />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Buttons - WhatsApp & Scroll to Top */}
      <FloatingButtons />
    </div>
  );
}

export default App;

