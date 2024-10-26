import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users } from 'lucide-react';

const VEHICLE_DATA = {
  brands: [
    {
      id: 1,
      name: 'Tesla',
      models: ['Model 3', 'Model Y', 'Model S', 'Model X', 'Cybertruck']
    },
    {
      id: 2,
      name: 'Nissan',
      models: ['Leaf', 'Ariya', 'e-NV200', 'Note e-Power', 'Kicks e-Power']
    },
    {
      id: 3,
      name: 'BMW',
      models: ['i3', 'i4', 'iX', 'iX3', 'i7']
    },
    {
      id: 4,
      name: 'Chevrolet',
      models: ['Bolt EV', 'Bolt EUV', 'Blazer EV', 'Silverado EV', 'Equinox EV']
    },
    {
      id: 5,
      name: 'Hyundai',
      models: ['IONIQ 5', 'Kona Electric', 'IONIQ 6', 'NEXO', 'IONIQ Electric']
    }
  ],
  years: Array.from({ length: 24 }, (_, i) => 2024 - i)
};

export default function VehicleDetails() {
  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState({
    year: '',
    brand: '',
    model: '',
    usage: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicleData(prev => ({
      ...prev,
      [name]: value,
      // Reset model when brand changes
      ...(name === 'brand' && { model: '' })
    }));
  };

  const handleUsageSelect = (usage: string) => {
    setVehicleData(prev => ({ ...prev, usage }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/quote-result');
  };

  const selectedBrand = VEHICLE_DATA.brands.find(b => b.name === vehicleData.brand);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Detalles del Vehículo
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                  Año de fabricación
                </label>
                <select
                  id="year"
                  name="year"
                  value={vehicleData.year}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Seleccionar año</option>
                  {VEHICLE_DATA.years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                  Marca
                </label>
                <select
                  id="brand"
                  name="brand"
                  value={vehicleData.brand}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Seleccionar marca</option>
                  {VEHICLE_DATA.brands.map(brand => (
                    <option key={brand.id} value={brand.name}>{brand.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                  Modelo
                </label>
                <select
                  id="model"
                  name="model"
                  value={vehicleData.model}
                  onChange={handleChange}
                  required
                  disabled={!vehicleData.brand}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Seleccionar modelo</option>
                  {selectedBrand?.models.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Tipo de uso
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handleUsageSelect('particular')}
                  className={`p-6 border rounded-lg text-center hover:border-emerald-500 transition-colors ${
                    vehicleData.usage === 'particular' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                  }`}
                >
                  <Users className="h-8 w-8 mx-auto text-emerald-600 mb-3" />
                  <h3 className="font-semibold mb-2">Particular</h3>
                  <p className="text-sm text-gray-600">Uso diario y/o familiar</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleUsageSelect('otros')}
                  className={`p-6 border rounded-lg text-center hover:border-emerald-500 transition-colors ${
                    vehicleData.usage === 'otros' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                  }`}
                >
                  <Car className="h-8 w-8 mx-auto text-emerald-600 mb-3" />
                  <h3 className="font-semibold mb-2">Otros</h3>
                  <p className="text-sm text-gray-600">Taxis, vehículos de alquiler, servicios públicos, entre otros</p>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!vehicleData.year || !vehicleData.brand || !vehicleData.model || !vehicleData.usage}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}