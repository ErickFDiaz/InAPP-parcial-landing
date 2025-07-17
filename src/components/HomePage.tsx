import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import QuoteForm from './QuoteForm';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Mision from './Mision';

export default function HomePage() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      
      {/* Quote Section */}
      <section id="quote" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Obtén tu Cotización</h2>
            <p className="mt-4 text-lg text-gray-600">Completa el formulario y recibe tu cotización personalizada</p>
          </div>
          <QuoteForm />
        </div>
      </section>
      <AboutUs />
      <Mision />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}