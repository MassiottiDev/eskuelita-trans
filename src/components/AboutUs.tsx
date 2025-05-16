import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import image assets from src/media/photos
import photo1 from '@/media/photos/DSC_0202.jpg';
import photo2 from '@/media/photos/DSC_0209.jpg';
import photo3 from '@/media/photos/DSC_0213.jpg';
import photo4 from '@/media/photos/quenospasa3.jpg';
import photo5 from '@/media/photos/quenospasa4.jpg';
import photo6 from '@/media/photos/quenospasa6.jpg';
const AboutUs = () => {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6];
  return <section id="about" className="py-[40px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
          Sobre la Eskuelita Trans*
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 mt-2"></span>
        </h2>
      </div>
      
      <Card className="bg-white/90 shadow-lg border-0">
        <CardContent className="p-8">
          <p className="mb-4">La Eskuelita Trans* nació a mediados de 2023 del encuentro de un grupo de personas trans* con un deseo compartido: intercambiar experiencias y saberes sobre su paso por diversas instituciones educativas. Desde sus roles como docentes, educadores, trabajadores sociales y participantes de espacios informales de aprendizaje, comenzaron a tejer una red de apoyo y conocimiento mutuo.</p>
          
          <p className="mb-4">A medida que este grupo se fortalecía, una visión clara emergió: la creación de un espacio de referencia para otras personas trans, travestis y no binarias que anhelan continuar sus estudios formales. Este anhelo colectivo responde a la preocupante realidad que enfrentan las identidades trans* en Uruguay en relación al acceso y la permanencia en el sistema educativo.</p>
          
          <p>En este contexto, La Eskuelita Trans* se erige como un faro de autonomía y resistencia. Nuestro propósito fundamental es contrarrestar activamente los mecanismos de expulsión y exclusión que históricamente han marginado a las personas trans* de la vida social y cultural. Para ello, ofrecemos propuestas educativas inclusivas diseñadas desde nuestras propias experiencias y necesidades, construyendo así un camino hacia la plena participación y el desarrollo de nuestra comunidad.</p>
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