import React from "react";
import { Parallax } from "react-parallax";

const HeroSection = () => {
  return (
    <Parallax
      bgImage="https://w.wallhaven.cc/full/kw/wallhaven-kw783d.jpg"
      strength={500}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      bgImageStyle={{ objectFit: 'cover' }} // Asegura que la imagen cubra el área sin estirarse
    >
      <div id="hero" className="text-center text-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Bienvenido a Soluciones Digitales</h1>
        <p className="text-lg md:text-2xl text-shadow">Landing Page de Ejemplo</p>
      </div>
    </Parallax>
  );
};

export default HeroSection;
