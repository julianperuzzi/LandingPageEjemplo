import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 min-h-[70vh] flex flex-col justify-center" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contáctanos</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          ¡Pongámonos en contacto y hagamos realidad tus ideas!
        </p>

        {/* Botón de Correo */}
        <a
          href="mailto:info@tuempresa.com"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-4"
        >
          Envíanos un Correo
        </a>

        {/* Texto adicional */}
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          ¿Prefieres contactarnos por WhatsApp?
        </p>

        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Envíanos un Mensaje por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
