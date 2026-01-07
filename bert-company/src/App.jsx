// App.jsx
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';
import Snowfall from 'react-snowfall';

const Hero = lazy(() => import('./pages/Hero'));
const Services = lazy(() => import('./pages/Services'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Mission = lazy(() => import('./pages/Mission'));
const Features = lazy(() => import('./pages/Features'));

export default function App() {
  return (
    <>
  <Snowfall
    style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: 2,
      pointerEvents: 'none',
    }}
    snowflakeCount={120}
  />
  <Navbar />
  <Suspense fallback={<div style={{ height: '60vh' }} />}>
    <Hero />
    <Services />
    <WhyUs />
    <Mission />
    <Features />
  </Suspense>
  <Footer />
</>

  );
}
