import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-pulse"
        >
          <div className="relative w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
