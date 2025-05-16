import React from "react";

// About section with id for hash navigation
const AboutUs = () => (
  <section id="about" className="mb-12">
    
    
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        La Eskuelita Trans
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Somos una organización sin fines de lucro dedicada a brindar
            educación y apoyo a la comunidad trans en México.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nuestra misión es crear un espacio seguro e inclusivo donde las
            personas trans puedan aprender, crecer y prosperar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ofrecemos una variedad de programas y servicios, que incluyen:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Clases de alfabetización y educación básica</li>
            <li>Talleres de desarrollo de habilidades</li>
            <li>Asesoramiento y apoyo psicosocial</li>
            <li>Defensa de los derechos de las personas trans</li>
          </ul>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Eskuelita Trans"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
