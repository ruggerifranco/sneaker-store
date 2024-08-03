'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">Página No Encontrada</h1>
        <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
          Lo sentimos, la página que estás buscando no existe. Puede que haya sido movida o eliminada.
        </p>
        <button
          onClick={() => router.back()}
          className="bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-900 px-4 py-2 rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-700 focus:ring-opacity-50"
        >
          Volver a la Página Anterior
        </button>
      </div>
    </div>
  );
};

export default NotFound;
