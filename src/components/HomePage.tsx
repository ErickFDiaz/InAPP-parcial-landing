import Hero from './Hero';
import QuoteForm from './QuoteForm';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';

export default function HomePage() {
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
      
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}