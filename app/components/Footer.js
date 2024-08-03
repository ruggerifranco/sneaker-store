import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Desarrollado por Franco Ruggeri</p>
        <div className="flex justify-center items-center mb-4">
          <p className="mr-2">Powered by</p>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={72}
            height={24}
          />
        </div>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/francoruggeri1999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">LinkedIn</a>
          <a href="https://github.com/ruggerifranco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
