import React from "react";
import { Parallax } from "react-parallax";

const HeroSection = () => {
  return (
    <Parallax
      bgImage="https://w.wallhaven.cc/full/kw/wallhaven-kw783d.jpg"
      strength={300}
      bgImageStyle={{  objectFit: "cover", width: "100%", height: "100%"  }}
    >
      <div id="hero" className="text-center text-gray-100 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Bienvenido a Soluciones Digitales</h1>
        <p className="text-lg md:text-2xl text-shadow">Landing Page de Ejemplo</p>
      </div>
    </Parallax>
  );
};

export default HeroSection;
