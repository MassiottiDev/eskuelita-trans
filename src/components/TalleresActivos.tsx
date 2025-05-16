
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

// Import sample images
import taller1 from '@/media/photos/DSC_0202.jpg';
import taller2 from '@/media/photos/DSC_0209.jpg';
import taller3 from '@/media/photos/DSC_0213.jpg';
import taller4 from '@/media/photos/quenospasa3.jpg';

// Workshop data
const talleres = [
  {
    id: 1,
    title: "Taller de Identidad",
    imageSrc: taller1,
  },
  {
    id: 2,
    title: "Taller de Expresión",
    imageSrc: taller2,
  },
  {
    id: 3,
    title: "Taller de Arte",
    imageSrc: taller3,
  },
  {
    id: 4,
    title: "Taller de Comunicación",
    imageSrc: taller4,
  }
];

const TalleresActivos = () => {
  return (
    <section id="talleres" className="py-[40px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
          Talleres Activos
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 mt-2"></span>
        </h2>
      </div>

      <div className="w-full px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {talleres.map((taller) => (
              <CarouselItem key={taller.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={taller.imageSrc} 
                          alt={taller.title} 
                          className="w-full h-full object-cover" 
                        />
                      </AspectRatio>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white text-xl font-bold">{taller.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80" />
          <CarouselNext className="right-2 bg-white/80" />
        </Carousel>
      </div>
    </section>
  );
};

export default TalleresActivos;
