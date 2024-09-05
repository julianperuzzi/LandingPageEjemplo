import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {/* Servicio 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/736x/ac/29/0a/ac290addcd1b378dece4f3c9ea3e3367.jpg" // Reemplaza con la imagen de tu servicio
                alt="Servicio 1"
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Card con descripción debajo de la imagen */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Servicio 1</h3>
              <p className="text-gray-700">
                Breve explicación adicional del servicio 1. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/736x/ab/4b/03/ab4b03313829a66ffa1485df79abc3c2.jpg" // Reemplaza con la imagen de tu servicio
                alt="Servicio 2"
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Card con descripción debajo de la imagen */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Servicio 2</h3>
              <p className="text-gray-700">
                Breve explicación adicional del servicio 2. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/736x/d0/3b/b3/d03bb33668cfe37c1b99c5576b73979b.jpg" // Reemplaza con la imagen de tu servicio
                alt="Servicio 3"
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Card con descripción debajo de la imagen */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Servicio 3</h3>
              <p className="text-gray-700">
                Breve explicación adicional del servicio 3. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
