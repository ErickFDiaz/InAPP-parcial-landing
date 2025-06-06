import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="block"
           onClick={() => {
             window.location.href = "/";
           }}>
          <div className="flex items-center">
            <img src="/vite.png" className="h-8 w-8 text-emerald-600"/>
            <span className="ml-2 text-xl font-bold text-gray-900">Electrysure</span>
          </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/#aboutUs" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
                Sobre Nosotros
              </Link>
              <Link to="/#features" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
                Características
              </Link>
              <Link to="/#testimonials" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
                Testimonios
              </Link>
              <motion.div whileHover={{ scale: 1.09 }} whileTap={{ scale: 0.9 }}>
              <button onClick={() => {
                  const element = document.querySelector('#quote');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }} 
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                
                Cotizar Ahora
              </button>
              </motion.div>
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
            <Link to="#aboutUs" className="block text-gray-700 hover:text-emerald-600 px-3 py-2">
              Sobre Nosotros
            </Link>
            <Link to="#features" className="block text-gray-700 hover:text-emerald-600 px-3 py-2">
              Características
            </Link>
            <Link to="#testimonials" className="block text-gray-700 hover:text-emerald-600 px-3 py-2">
              Testimonios
            </Link>
            <button onClick={() => {
                const element = document.querySelector('#quote');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}  
            className="w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
            Cotizar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}