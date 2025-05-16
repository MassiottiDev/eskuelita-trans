
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const RadioSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  return <section id="radio" className="py-[40px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
          Radio de la Eskuelita
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 mt-2"></span>
        </h2>
      </div>
      
      <Card className="bg-gray-900 text-white shadow-lg border-0 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded flex items-center justify-center">
                <div className="text-2xl font-bold">E</div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Farewell</h3>
                <p className="text-gray-400 text-sm">Song Exploder</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <SkipBack size={20} />
              </button>
              <button className="p-3 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors" onClick={togglePlayback}>
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <SkipForward size={20} />
              </button>
            </div>
            
            <div className="hidden md:flex space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex items-center space-x-4">
            <div className="text-xs text-gray-400">00:00</div>
            <div className="flex-1">
              <div className="h-1 bg-gray-700 rounded-full">
                <div className="h-1 bg-yellow-400 rounded-full w-1/3"></div>
              </div>
            </div>
            <div className="text-xs text-gray-400">00:39</div>
          </div>
          
          <div className="mt-6 md:hidden flex items-center justify-center space-x-6">
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <SkipBack size={20} />
            </button>
            <button className="p-4 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors" onClick={togglePlayback}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded-lg">
              Trabajo en Progreso
            </div>
          </div>
        </div>
      </Card>
    </section>;
};

export default RadioSection;
