import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Pondok Pesantren Al-Fattah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;