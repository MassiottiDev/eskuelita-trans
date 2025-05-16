
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

// Import sample images from Unsplash for upcoming workshops
const proximosTaller1 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const proximosTaller2 = "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const proximosTaller3 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

// Upcoming workshop data
const proximosTalleres = [
  {
    id: 1,
    title: "Taller de Programación",
    date: "Mayo 25, 2025",
    imageSrc: proximosTaller1,
    url: "https://example.com/taller-programacion"
  },
];

const ProximosTalleres = () => {
  const [api, setApi] = useState<any>(null);

  // Set up auto-advance every 15 seconds
  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 15000); // 15 seconds

    // Clean up interval when component unmounts
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <section id="proximos-talleres" className="py-[40px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
          Próximos Talleres
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 mt-2"></span>
        </h2>
      </div>

      <div className="w-full px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {proximosTalleres.map((taller) => (
              <CarouselItem key={taller.id} className="md:basis-1/2 lg:basis-1/3">
                <a 
                  href={taller.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block transition-transform hover:scale-105 cursor-pointer"
                >
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
                          <p className="text-white/90 text-sm mt-1">{taller.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
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

export default ProximosTalleres;
