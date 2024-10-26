import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuoteForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hasPlate: false,
    plate: '',
    document: '',
    phone: '',
    acceptedPolicy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'hasPlate' && !checked) {
      setFormData(prev => ({ ...prev, plate: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // API call would go here
      // await fetch('api/quotes', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      navigate('/vehicle-details');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Cotiza tu seguro
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="hasPlate"
            name="hasPlate"
            checked={formData.hasPlate}
            onChange={handleChange}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label htmlFor="hasPlate" className="ml-2 block text-sm text-gray-700">
            Ya tengo placa
          </label>
        </div>

        {formData.hasPlate && (
          <div>
            <label htmlFor="plate" className="block text-sm font-medium text-gray-700">
              Placa del vehículo
            </label>
            <input
              type="text"
              id="plate"
              name="plate"
              value={formData.plate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="ABC-123"
              maxLength={7}
            />
          </div>
        )}

        <div>
          <label htmlFor="document" className="block text-sm font-medium text-gray-700">
            Número de documento
          </label>
          <input
            type="text"
            id="document"
            name="document"
            value={formData.document}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="Ingresa tu número de documento"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Número de celular
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="Ingresa tu número de celular"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="acceptedPolicy"
            name="acceptedPolicy"
            checked={formData.acceptedPolicy}
            onChange={handleChange}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="acceptedPolicy" className="ml-2 block text-sm text-gray-700">
            Acepto la{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-500">
              política de privacidad
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={!formData.acceptedPolicy}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
            ${formData.acceptedPolicy 
              ? 'bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500' 
              : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Cotizar Ahora
        </button>
      </form>
    </div>
  );
}