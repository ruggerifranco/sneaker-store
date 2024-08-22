'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 text-gray-700 dark:text-gray-300">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 dark:hover:text-blue-500">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 dark:hover:text-blue-300">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 dark:hover:text-pink-400">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700 dark:hover:text-blue-600">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
