'use client';

import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">Contáctanos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-8 md:mb-0">
          <ContactForm />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Síguenos en redes sociales</h2>
          <SocialIcons />
          <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} SneakerStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
