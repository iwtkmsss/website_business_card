import './styles/global.css';
import Hero from './pages/Hero';
import Cloud from './pages/Cloud';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cloud />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
