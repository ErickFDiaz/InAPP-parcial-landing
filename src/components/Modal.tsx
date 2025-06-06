import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl p-2"
        >
          ⛌
        </button>

        <h2 className="text-xl font-bold mb-2">Términos y Condiciones </h2><hr /><br />
        <p className="mb-3">Bienvenido a Electrysure, una plataforma digital especializada en 
          cotizaciones de seguros para vehículos eléctricos. Al acceder y utilizar nuestro sitio 
          web y los servicios ofrecidos, usted acepta los siguientes términos y condiciones. 
          Por favor, léalos detenidamente.</p>
        <h3 className="text-l font-bold mb-3">1. Aceptación de los Términos</h3>
        <p className="mb-3">Al utilizar este sitio web, usted acepta quedar legalmente vinculado por estos Términos 
          y Condiciones, así como por nuestra Política de Privacidad. Si no está de acuerdo con 
          alguna parte de los términos, por favor no utilice nuestros servicios.</p>
        <h3 className="text-l font-bold mb-3">2. Responsabilidad del Usuario</h3>
        <p className="mb-3">Es responsabilidad del usuario verificar y entender los términos 
          específicos del seguro ofrecido por cada aseguradora. Electrysure no será responsable por 
          cambios en las condiciones, tarifas o cobertura realizadas por las aseguradoras aliadas.</p>
        <h3 className="text-l font-bold mb-3">3. Modificaciones</h3>
        <p className="mb-3">Electrysure se reserva el derecho de modificar estos Términos y Condiciones 
          en cualquier momento. Las modificaciones se publicarán en esta misma página y entrarán en vigor 
          inmediatamente después de su publicación.</p><br />
        
          <button
          onClick={onClose}
          className="w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
          Entendido
        </button>
      </div>
    </div>
  );
};

export default Modal;
