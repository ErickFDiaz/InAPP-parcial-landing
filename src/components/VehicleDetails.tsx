import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users } from 'lucide-react'; // Asumo que tienes lucide-react instalado
import { motion } from 'framer-motion';
import { useQuote } from '../context/QuoteContext';

// La URL base de tu backend de Node.js
const API_BASE_URL = 'http://localhost:9999/api/1.0';

export default function VehicleDetails() {
  const navigate = useNavigate();
  const { quoteData, updateQuoteData } = useQuote();

  // Estado local para los datos de ESTE formulario
  const [vehicleData, setVehicleData] = useState({
    year: '',
    brand: '',
    model: '',
    // Valor por defecto para 'usage' para asegurar que nunca esté vacío
    usage: 'particular' 
  });
  
  // Estados para manejar los datos dinámicos de los desplegables
  const [options, setOptions] = useState<{ brands: string[], years: number[] }>({ brands: [], years: [] });
  const [models, setModels] = useState<string[]>([]);
  
  // Estados para la experiencia de usuario
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1. Cargar las marcas y años al montar el componente
  useEffect(() => {
    // Si no hay 'document' en el contexto, significa que el usuario se saltó el primer paso.
    if (!quoteData.document) {
      console.warn("Datos del primer formulario no encontrados. Redirigiendo...");
      navigate('/');
    }

    const fetchInitialOptions = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/vehiculos/options`);
        const result = await response.json();
        if (!result.success) throw new Error(result.message);
        setOptions(result.data);
      } catch (err: any) {
        setError("No se pudieron cargar los datos de vehículos. Por favor, intenta de nuevo más tarde.");
        console.error(err);
      }
    };
    fetchInitialOptions();
  }, [quoteData, navigate]);

  // 2. Cargar los modelos cuando el usuario selecciona una marca
  useEffect(() => {
    if (vehicleData.brand) {
      const fetchModels = async () => {
        setModels([]);
        setVehicleData(prev => ({ ...prev, model: '' }));
        try {
          const response = await fetch(`${API_BASE_URL}/vehiculos/options/models/${vehicleData.brand}`);
          const result = await response.json();
          if (!result.success) throw new Error(result.message);
          setModels(result.data);
        } catch (err: any) {
          setError("No se pudieron cargar los modelos para esa marca.");
          console.error(err);
        }
      };
      fetchModels();
    }
  }, [vehicleData.brand]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicleData(prev => ({ ...prev, [name]: value }));
  };

  const handleUsageSelect = (usage: string) => {
    setVehicleData(prev => ({ ...prev, usage }));
  };

  // 3. La lógica de envío que combina todo
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // --- ¡AQUÍ ESTÁ LA MAGIA! ---
    // Unimos los datos del contexto (de QuoteForm) con los de este formulario.
    // El resultado es un único objeto con toda la información requerida por el backend.
    const fullQuotePayload = {
      ...quoteData,     // Contiene 'document', 'phone', 'plate', etc.
      ...vehicleData,   // Contiene 'year', 'brand', 'model', 'usage'.
    };
    
    // Puedes usar esta línea para verificar el objeto final antes de enviarlo
    console.log('Payload final que se enviará a la API:', fullQuotePayload);

    try {
      // Llamamos al endpoint para crear el lead en el backend
      const response = await fetch(`${API_BASE_URL}/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullQuotePayload),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'Ocurrió un error al generar la cotización.');
      }

      // Guardamos la respuesta del backend (que incluye el _id y la prima preliminar) en el contexto
      updateQuoteData(result.data);
      // Navegamos a la página final de resultados
      navigate('/quote-result');

    } catch (error: any) {
      console.error('Error al enviar la cotización:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Tu JSX para la segunda pantalla
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Detalles del Vehículo</h2>
            {error && <p className="text-center text-red-500 bg-red-100 p-3 rounded-md">{error}</p>}
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Año</label>
                <select id="year" name="year" value={vehicleData.year} onChange={handleChange} required className="mt-1 block w-full p-2 border rounded-md">
                  <option value="">Seleccionar</option>
                  {options.years.map(year => (<option key={year} value={year}>{year}</option>))}
                </select>
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marca</label>
                <select id="brand" name="brand" value={vehicleData.brand} onChange={handleChange} required className="mt-1 block w-full p-2 border rounded-md">
                  <option value="">Seleccionar</option>
                  {options.brands.map(brand => (<option key={brand} value={brand}>{brand}</option>))}
                </select>
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700">Modelo</label>
                <select id="model" name="model" value={vehicleData.model} onChange={handleChange} required disabled={!vehicleData.brand || models.length === 0} className="mt-1 block w-full p-2 border rounded-md disabled:bg-gray-100">
                  <option value="">Seleccionar</option>
                  {models.map(model => (<option key={model} value={model}>{model}</option>))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Tipo de uso</label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                 <button type="button" onClick={() => handleUsageSelect('particular')} className={`p-6 border rounded-lg text-center transition-colors ${vehicleData.usage === 'particular' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                    <Users className="h-8 w-8 mx-auto text-emerald-600 mb-3" />
                    <h3 className="font-semibold">Particular</h3>
                    <p className="text-sm text-gray-600">Uso diario y/o familiar</p>
                 </button>
                 <button type="button" onClick={() => handleUsageSelect('otros')} className={`p-6 border rounded-lg text-center transition-colors ${vehicleData.usage === 'otros' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                    <Car className="h-8 w-8 mx-auto text-emerald-600 mb-3" />
                    <h3 className="font-semibold">Otros</h3>
                    <p className="text-sm text-gray-600">Taxis, alquiler, etc.</p>
                 </button>
              </div>
            </div>
          </div>

          <motion.div className="flex justify-center" whileHover={{ scale: 1.05 }}>
            <button type="submit" disabled={!vehicleData.model || isLoading} className="w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400">
              {isLoading ? 'Enviando...' : 'Continuar'}
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}