import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana García',
    role: 'Propietaria de Tesla Model 3',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'El servicio es excepcional. La asistencia en recarga de emergencia me salvó en un viaje largo.',
    rating: 5
  },
  {
    name: 'Carlos Mendoza',
    role: 'Dueño de Nissan Leaf',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: 'La mejor decisión fue asegurar mi vehículo eléctrico con ellos. El proceso fue muy sencillo.',
    rating: 5
  },
  {
    name: 'María Torres',
    role: 'Conductora de BMW i3',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'Excelente cobertura y atención personalizada. Recomiendo totalmente el servicio.',
    rating: 5
  },
  {
    name: "Luis Garcia",
    role: "Conductor de Volvo C40",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 5,
    quote: "Muy buena atención al cliente y resultados rápidos. Un servicio 10/10",
  },
  {
    name: "Pamela Villegas",
    role: "Conductora de Maxus EV30",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    quote: "Cuando tuve problemas, fueron de inmediato en mi ayuda. Servicio muy confiable",
  },
  {
    name: "Martin Cardenas",
    role: "Conductor de Audi e-Tron",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    rating: 5,
    quote: "Un servicio recomendado, la atencion es rapida y cuenta con muchos beneficios.",
  },
];

export default function Testimonials() {

  const controls = useAnimation();
  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: "-50%",
          transition: {
            duration: 30,
            ease: "linear",
          },
        });
        controls.set({ x: "0%" });
      }
    };
    animate();
  }, [controls]);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Lo que dicen nuestros clientes
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Experiencias reales de propietarios de vehículos eléctricos
        </p>
      </div>

      <div className="mt-16 relative overflow-hidden p-3">
        <motion.div
          className="flex gap-8 w-max"
          animate={controls}
          style={{ x: "0%" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[350px] max-w-xs bg-white rounded-xl shadow-md overflow-hidden p-6"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-gray-600">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}