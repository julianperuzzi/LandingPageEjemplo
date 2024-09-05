import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen de Lado */}
        <div className="hidden md:block">
          <img
            src="https://i.pinimg.com/1200x/02/3e/0c/023e0c601629d5336512145ab1914211.jpg" // Reemplaza con una imagen adecuada
            alt="Contáctanos"
            className="rounded-lg shadow-lg object-cover h-96 w-full"
          />
        </div>

        {/* Sección de Contacto */}
        <div className="flex flex-col justify-center text-center md:text-left bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
            ¡Pongámonos en contacto y hagamos realidad tus ideas!
          </p>

          {/* Botón de Correo */}
          <a
            href="mailto:info@tuempresa.com"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 mb-4 w-fit"
          >
            Envíanos un Correo
          </a>

          <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-800">
            ¿Prefieres contactarnos por WhatsApp?
          </p>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300 w-fit"
          >
            Envíanos un Mensaje por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
