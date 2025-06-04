

export default function AboutUs() {
    return(
        <section id="aboutUs" className="py-20 bg-gray-50 px-3">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 px-9">
          <h2 className="text-4xl font-bold mb-4">Sobre Nosotros</h2><br />
          <p className="text-gray-700 text-l">
          En Electrysure, creemos en un futuro más limpio, eficiente y accesible para todos. 
          Somos una plataforma especializada en cotizaciones de vehículos eléctricos, creada para facilitar 
          el proceso de encontrar y comparar opciones que se adapten a tus necesidades, presupuesto y estilo de vida.</p>
        </div>

        <div className="md:w-1/2 px-4">
          <img
            src="https://coldview.com/wp-content/uploads/2024/03/gestion-de-la-informacion-en-empresas-aseguradoras-scaled-e1711106580548.jpg"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
        </section>
    )
}