
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    id: 1,
    title: 'Grupo de Pares - Estrógeno',
    schedule: 'Jueves de 20:30 a 21:30',
    frequency: 'Frecuencia Semanal',
    description: 'Un grupo gratuito de pares, para que personas transfemeninas conecten y se apoyen mutuamente.',
    imageSrc: '/lovable-uploads/8ae70828-5f29-4b52-8012-8c5f1e09ba7b.png'
  },
  {
    id: 2,
    title: 'Grupo de Pares - Testo',
    schedule: 'Jueves de 19:00 a 20:00',
    frequency: 'Frecuencia Semanal',
    description: 'Un grupo gratuito de pares, para que personas transmasculinas conecten y se apoyen mutuamente.',
    imageSrc: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3'
  },
  {
    id: 3,
    title: 'Apoyo Acredita EBI',
    description: 'Apoyo a los Estudios para acreditar la Prueba "Acredita EBI" que permite culminar la educación media básica.',
    cta: 'Solicitar + Info',
    imageSrc: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3'
  }
];

const Initiatives = () => {
  return (
    <section id="initiatives" className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
          Iniciativas
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 mt-2"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative) => (
          <Card key={initiative.id} className="bg-white/90 shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src={initiative.imageSrc}
                alt={initiative.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{initiative.title}</h3>
              
              {initiative.schedule && (
                <div className="mb-2 text-sm text-gray-600">
                  {initiative.schedule}
                </div>
              )}
              
              {initiative.frequency && (
                <div className="mb-3 text-yellow-600 font-medium">
                  {initiative.frequency}
                </div>
              )}
              
              <p className="text-gray-700 mb-4">
                {initiative.description}
              </p>
              
              {initiative.cta && (
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800">
                  {initiative.cta}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;
