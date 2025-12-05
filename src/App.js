
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import TourPackages from './components/TourPackages';
import TopSelling from './components/TopSelling';


function App() {
  return (
   <div>

    <Navbar />
    <Hero />
    <TopSelling />
    <TourPackages />
    <Packages />
    <Testimonial />
    <Contact />
    <Footer />
   </div>
  );
}

export default App;
