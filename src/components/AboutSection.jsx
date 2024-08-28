import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 min-h-[80vh] flex items-center" data-aos="fade-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://w.wallhaven.cc/full/x1/wallhaven-x1rm63.jpg"
            alt="Sobre Nosotros"
            className="w-10/12 h-auto rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl leading-relaxed mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta, minima cupiditate explicabo libero, quia voluptas, delectus molestiae veniam deserunt est. Minima pariatur quibusdam sunt velit nostrum distinctio praesentium similique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
