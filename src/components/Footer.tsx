import React from "react";

// Footer section with id for hash navigation to "contact"
const Footer = () => (
  <footer id="contact" className="bg-yellow-500 py-6 mt-16 shadow-inner">
    <div className="container mx-auto text-center">
      <p className="text-gray-700">
        &copy; {new Date().getFullYear()} Eskuelita Trans. All rights reserved.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Made with ❤️ by the Eskuelita Team
      </p>
    </div>
  </footer>
);

export default Footer;
