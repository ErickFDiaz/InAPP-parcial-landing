import { ArrowRight, Shield, Zap, Car } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Seguro para tu</span>
            <span className="block text-emerald-600">Vehículo Eléctrico</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Protege tu inversión en movilidad sostenible con coberturas especializadas para vehículos eléctricos.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#quote" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10">
                Cotizar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md p-6">
              <Shield className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold">Cobertura Especializada</h3>
              <p className="mt-2 text-gray-600">Protección específica para componentes eléctricos y batería.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <Zap className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold">Asistencia 24/7</h3>
              <p className="mt-2 text-gray-600">Servicio de recarga de emergencia y asistencia especializada.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <Car className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold">Valor Preferencial</h3>
              <p className="mt-2 text-gray-600">Tarifas ajustadas al menor riesgo de los vehículos eléctricos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}