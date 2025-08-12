// App.jsx
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';

const Hero = lazy(() => import('./pages/Hero'));
const Services = lazy(() => import('./pages/Services'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Mission = lazy(() => import('./pages/Mission'));
const Features = lazy(() => import('./pages/Features'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{height:'60vh'}} />}>
        <Hero />
        <Services />
        <WhyUs />
        <Mission />
        <Features />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}
