import './styles/global.css';
import Hero from './pages/Hero';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
