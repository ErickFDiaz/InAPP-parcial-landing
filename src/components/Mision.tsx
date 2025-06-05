import { motion } from "framer-motion";

export default function Mision() {
    return(
        <section id="mision" className="py-20 bg-green-50 px-3">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="order-1 md:order-2 md:w-1/2 px-9">
                    <h2 className="text-4xl font-bold mb-4">Nuestra Misión</h2><br />
                    <p className="text-gray-700 text-l">
                        Impulsar la transición hacia la movilidad eléctrica facilitando el acceso a información clara, 
                        confiable y actualizada sobre vehículos eléctricos y sus precios.
                        Queremos simplificar el proceso de cotización para que más personas puedan tomar decisiones 
                        sostenibles con confianza, promoviendo así un cambio positivo en nuestras ciudades y el planeta.
                    </p>
                </div>

                <motion.div className="order-2 md:order-1 md:w-1/2 px-4"
                whileHover={{ scale: 1.06 }}>
                    <img
                        src="https://static.mercadonegro.pe/wp-content/uploads/2019/11/22192339/images-9.jpg"
                        className="w-full h-auto rounded-xl shadow-md"
                    />
                </motion.div>
            </div>
        </section>
    )
}