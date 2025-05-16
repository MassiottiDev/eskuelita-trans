
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";

// Sample data for publications
const publicaciones = [
  {
    id: 1,
    title: "Informe sobre derechos trans en América Latina",
    author: "Eskuelita Trans*",
    date: "Abril 2025",
    url: "https://example.com/informe-derechos-trans",
  },
  {
    id: 2,
    title: "Guía para el acceso a la salud de personas trans",
    author: "Colectiva Trans",
    date: "Marzo 2025",
    url: "https://example.com/guia-salud-trans",
  },
  {
    id: 3,
    title: "Experiencias de personas trans en entornos educativos",
    author: "Eskuelita Trans*",
    date: "Febrero 2025",
    url: "https://example.com/experiencias-educacion",
  },
  {
    id: 4,
    title: "Manual de buenas prácticas para espacios inclusivos",
    author: "Colectivo por la Diversidad",
    date: "Enero 2025",
    url: "https://example.com/manual-espacios-inclusivos",
  },
  {
    id: 5,
    title: "Políticas públicas y reconocimiento de identidad de género",
    author: "Eskuelita Trans*",
    date: "Diciembre 2024",
    url: "https://example.com/politicas-identidad-genero",
  }
];

const Publicaciones = () => {
  return (
    <section id="publicaciones" className="py-[40px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
          Publicaciones
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 mt-2"></span>
        </h2>
      </div>

      <div className="overflow-x-auto">
        <Table className="border rounded-lg shadow-sm bg-white">
          <TableHeader>
            <TableRow className="bg-yellow-100">
              <TableHead className="font-bold">Título</TableHead>
              <TableHead className="font-bold">Autor</TableHead>
              <TableHead className="font-bold">Fecha</TableHead>
              <TableHead className="font-bold w-[80px]">Enlace</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {publicaciones.map((pub) => (
              <TableRow 
                key={pub.id}
                className="hover:bg-yellow-50 transition-colors cursor-pointer"
                onClick={() => window.open(pub.url, "_blank")}
              >
                <TableCell className="font-medium">{pub.title}</TableCell>
                <TableCell>{pub.author}</TableCell>
                <TableCell>{pub.date}</TableCell>
                <TableCell>
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Publicaciones;
