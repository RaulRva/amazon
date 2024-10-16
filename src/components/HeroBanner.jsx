import React from 'react';
import heroBanner from '../../public/herobanner.png'
const HeroBanner = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-80"
          src={heroBanner}
          alt="Belleza y cuidado personal"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Cuida tu piel, <span className="text-pink-400">realza tu belleza</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-xl">
          Descubre los mejores productos para el cuidado de la piel y transforma tu rutina de belleza.
        </p>
        <button className="mt-8 bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300">
          Explorar productos
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
