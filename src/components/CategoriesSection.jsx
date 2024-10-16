import React from 'react';
import cuidadoPiel from '../../public/cuidadopiel.png'
import maquillaje from '../../public/maquillaje.png'
import cabello from '../../public/cabello.png'
import fragancia from '../../public/fragancia.png'
import belleza from '../../public/belleza.png'
const CategoriesSection = () => {
  const categories = [
    {
      title: 'Cuidado de la Piel',
      imageUrl: cuidadoPiel,
      description: 'Hidratantes, sérums, limpiadores faciales y más.',
    },
    {
      title: 'Maquillaje',
      imageUrl: maquillaje,
      description: 'Encuentra las mejores bases, sombras y labiales.',
    },
    {
      title: 'Cuidado del Cabello',
      imageUrl: cabello,
      description: 'Champús, acondicionadores y productos para todo tipo de cabello.',
    },
    {
      title: 'Fragancias',
      imageUrl: fragancia,
      description: 'Perfumes y colonias para cada estilo y ocasión.',
    },
    {
      title: 'Belleza Natural',
      imageUrl: belleza,
      description: 'Productos orgánicos y veganos para una belleza consciente.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Explora Nuestras Categorías de Productos
        </h2>

        {/* Grid de Categorías */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
            >
              {/* Imagen de la categoría */}
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-sm">{category.description}</p>
                <button className="mt-4 bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-full text-white">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
