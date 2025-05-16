import React from "react";

// Radio section with id for hash navigation
const RadioSection = () => (
  <section id="radio" className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Radio de la Eskuelita</h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-gray-700 mb-4">
        Escucha nuestros programas de radio y podcasts creados por la comunidad trans.
      </p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          className="w-full h-64 rounded-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Radio de la Eskuelita"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default RadioSection;
