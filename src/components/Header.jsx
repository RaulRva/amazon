import React from 'react';
import logo from '../../public/logo.png'
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 object-cover rounded-full"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-pink-500 transition duration-300">
            Inicio
          </a>
          <a href="#categories" className="text-gray-800 hover:text-pink-500 transition duration-300">
            Categorías
          </a>
          <a href="#reviews" className="text-gray-800 hover:text-pink-500 transition duration-300">
            Últimas Reseñas
          </a>
          <a href="#about" className="text-gray-800 hover:text-pink-500 transition duration-300">
            Sobre Nosotros
          </a>
          <a href="#contact" className="text-gray-800 hover:text-pink-500 transition duration-300">
            Contacto
          </a>
        </nav>

        {/* Botón para CTA */}
        <div className="hidden md:block">
          <a
            href="#subscribe"
            className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300"
          >
            Suscríbete
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
