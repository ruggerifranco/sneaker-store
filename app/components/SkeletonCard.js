import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-6 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-40 dark:from-gray-900 dark:opacity-60"></div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse mb-6">
        <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 mb-4 rounded"></div>
        <div className="w-1/4 h-6 bg-gray-300 dark:bg-gray-700 mb-4 rounded"></div>
        <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 mb-6 rounded"></div>
        <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
          <div className="w-full md:w-1/2 h-6 bg-gray-300 dark:bg-gray-700 mb-4 rounded"></div>
          <div className="w-full md:w-1/2 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="w-full h-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Productos Relacionados</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="relative bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden animate-pulse">
              <div className="w-full h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
              <div className="p-4">
                <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 mb-2 rounded"></div>
                <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
