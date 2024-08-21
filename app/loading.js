'use client';
import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
      <Image
        src="/sneaker-logo.png" 
        alt="Loading"
        width={300} 
        height={300}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
