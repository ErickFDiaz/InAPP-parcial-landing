import { Car, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Electrysure</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
                Características
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
                Beneficios
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
                Testimonios
              </a>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                Cotizar Ahora
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#features" className="block text-gray-700 hover:text-emerald-600 px-3 py-2">
              Características
            </a>
            <a href="#benefits" className="block text-gray-700 hover:text-emerald-600 px-3 py-2">
              Beneficios
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-emerald-600 px-3 py-2">
              Testimonios
            </a>
            <button className="w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
              Cotizar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}