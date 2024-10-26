import { Phone } from 'lucide-react';

export default function QuoteResult() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
                alt="Electric car charging"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Queremos contarte algo importante
              </h2>
              <p className="text-gray-600 mb-8">
                Estamos ampliando nuestra red de seguros para poder asegurarte, pero hoy no podremos continuar. 
                Discúlpanos por este inconveniente, un asesor se comunicará contigo para brindarte seguros 
                vehiculares que te pueden interesar.
              </p>
              <div className="flex items-center text-emerald-600">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-medium">
                  Si no deseas esperar, llámanos al (01) 411 6001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}