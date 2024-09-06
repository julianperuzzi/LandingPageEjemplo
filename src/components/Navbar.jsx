import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100/70 text-gray-600 p-4 fixed top-0 w-full backdrop-blur-sm shadow-lg z-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <a className="font-serif" href="#">TU LOGO ✨</a>
        </div>

        {/* Icono del menú (visible en móvil) */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menú de navegación */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex  absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-gray-100 md:space-x-4 md:bg-transparent w-full md:w-auto p-4 md:p-0`}
        >
          <li className="my-2 md:my-0">
            <a href="#hero" className="hover:text-gray-600">
              Inicio
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#about" className="hover:text-gray-600">
              Sobre Nosotros
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#services" className="hover:text-gray-600">
              Servicios
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#contact" className="hover:text-gray-600">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
