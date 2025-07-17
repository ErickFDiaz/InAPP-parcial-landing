import { motion } from "framer-motion"

export default function AboutUs() {
    return(
        <section id="aboutUs" className="py-20 bg-gray-50 px-3 overflow-x-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div className="md:w-1/2 px-9"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-4xl font-bold mb-4">Sobre Nosotros</h2><br />
          <p className="text-gray-700 text-l">
          En Electrysure, creemos en un futuro más limpio, eficiente y accesible para todos. 
          Somos una plataforma especializada en cotizaciones de vehículos eléctricos, creada para facilitar 
          el proceso de encontrar y comparar opciones que se adapten a tus necesidades, presupuesto y estilo de vida.</p>
        </motion.div>

        <motion.div className="md:w-1/2 px-4"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}>
            <motion.img
                    whileHover={{ scale: 1.06 }} whileTap={{ scale: 1 }}
              src="https://coldview.com/wp-content/uploads/2024/03/gestion-de-la-informacion-en-empresas-aseguradoras-scaled-e1711106580548.jpg"
              className="w-full h-auto rounded-xl shadow-md"
            />
        </motion.div>
        </div>
        </section>
    )
}