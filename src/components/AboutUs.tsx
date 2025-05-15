
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section id="about" className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
          Sobre la Eskuelita Trans
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 mt-2"></span>
        </h2>
      </div>
      
      <Card className="bg-white/90 shadow-lg border-0">
        <CardContent className="p-8">
          <p className="mb-4">
            La Eskuelita Trans nació a mediados de 2023 del encuentro de un grupo de personas trans con un 
            deseo compartido: intercambiar experiencias y saberes sobre su paso por diversas instituciones 
            educativas. Desde sus roles como docentes, educadores, trabajadores sociales y participantes de 
            espacios informales de aprendizaje, comenzaron a tejer una red de apoyo y conocimiento mutuo.
          </p>
          
          <p className="mb-4">
            A medida que este grupo se fortalecía, una visión clara emergió: la creación de un espacio de 
            referencia para otras personas trans, travestis y no binarias que anhelan continuar sus estudios 
            formales. Este anhelo colectivo responde a la preocupante realidad que enfrentan las identidades 
            trans en Uruguay en relación al acceso y la permanencia en el sistema educativo.
          </p>
          
          <p>
            En este contexto, La Eskuelita Trans se erige como un faro de autonomía y resistencia. Nuestro 
            propósito fundamental es contrarrestar activamente los mecanismos de expulsión y exclusión que 
            históricamente han marginado a las personas trans de la vida social y cultural. Para ello, ofrecemos 
            propuestas educativas inclusivas diseñadas desde nuestras propias experiencias y necesidades, 
            construyendo así un camino hacia la plena participación y el desarrollo de nuestra comunidad.
          </p>
        </CardContent>
      </Card>
      
      <div className="mt-10 bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img 
            src="https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=1000&auto=format&fit=crop"
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button className="bg-white/70 hover:bg-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="bg-white/70 hover:bg-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
