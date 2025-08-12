import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import Mission from './pages/Mission';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Services />
      <WhyUs />
      <Mission />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
