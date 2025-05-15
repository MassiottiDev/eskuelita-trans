import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
const AboutUs = () => {
  const images = ["/lovable-uploads/34bae108-1059-48a8-b3a9-1fa503225ae2.png", "/lovable-uploads/505c07f7-b013-4796-a14d-5043f4c86e0a.png", "/lovable-uploads/ea670609-ad93-4e52-b6f0-5a15c6be6201.png", "/lovable-uploads/171b028c-76a5-4546-b2ff-876136ec7dab.png", "/lovable-uploads/ec3660af-4318-4d73-99ac-6fa1d0e6a70a.png", "/lovable-uploads/352e30bc-d09a-419e-8b25-761e3bc4cf45.png"];
  return <section id="about" className="py-[40px]">
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
      
      <div className="mt-10 mx-auto max-w-3xl">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden border-0">
                    <div className="h-80 w-full relative">
                      <img src={image} alt={`Eskuelita Trans - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </Card>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>;
};
export default AboutUs;