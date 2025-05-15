
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-yellow-400 text-gray-800">
      <div className="container mx-auto px-4 py-10 bg-white/90 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Juan+Carlos+Gómez+1581,+Montevideo,+Uruguay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              Juan Carlos Gómez 1581, Montevideo, Uruguay
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://api.whatsapp.com/send/?phone=59899398333&text=Quiero+formar+parte+de+la+Eskuelita+Trans%2A.+Mi+nombre+es%3A+&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://www.instagram.com/eskuelita_trans/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-yellow-500 text-center text-sm">
          © 2025 Eskuelita Trans. Todos los Derechos Reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
