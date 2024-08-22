import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-6 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-40 dark:from-gray-900 dark:opacity-60"></div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
        <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 mb-4"></div>
        <div className="w-1/4 h-6 bg-gray-300 dark:bg-gray-700 mb-4"></div>
        <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 mb-4"></div>
        <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
          <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 mb-2 md:mb-0"></div>
          <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
