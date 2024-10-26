import { Shield, Zap, Clock, CreditCard, HeartHandshake, PhoneCall } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Cobertura Total',
    description: 'Protección integral para tu vehículo eléctrico, incluyendo batería y componentes especializados.'
  },
  {
    icon: Zap,
    title: 'Asistencia en Recarga',
    description: 'Servicio de recarga de emergencia cuando lo necesites, disponible 24/7.'
  },
  {
    icon: Clock,
    title: 'Respuesta Rápida',
    description: 'Atención inmediata y gestión ágil de reclamos para minimizar inconvenientes.'
  },
  {
    icon: CreditCard,
    title: 'Pagos Flexibles',
    description: 'Opciones de pago adaptadas a tus necesidades, con tarifas preferenciales.'
  },
  {
    icon: HeartHandshake,
    title: 'Servicio Personalizado',
    description: 'Asesoría especializada en vehículos eléctricos para una mejor experiencia.'
  },
  {
    icon: PhoneCall,
    title: 'Soporte 24/7',
    description: 'Asistencia técnica y atención al cliente disponible en todo momento.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Características Premium
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Diseñado específicamente para propietarios de vehículos eléctricos
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-emerald-50 text-emerald-600 ring-4 ring-white">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}