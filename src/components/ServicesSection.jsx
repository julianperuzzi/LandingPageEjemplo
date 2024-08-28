import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white min-h-[80vh] flex flex-col justify-center" data-aos="fade-right">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6md: mb-20">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-100  shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Servicio 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam exercitationem saepe.</p>
          </div>
          <div className="p-8 bg-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Servicio 2</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam exercitationem saepe.</p>
          </div>
          <div className="p-8 bg-gray-100  shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Servicio 3</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam exercitationem saepe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
