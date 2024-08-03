'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation'; 

const menuItems = [
  { href: "/shop", label: "Tienda" },
  { href: "/admin", label: "Admin" },
  { href: "/cart", label: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l1 9h11l1-9h2M4 14h12m-6 4h6"></path></svg> }
];

const menuItemsMobile = [
  { href: "/shop", label: "Tienda" },
  { href: "/admin", label: "Admin" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
              <Image 
                src="/sneaker-logo.png" 
                alt="Logo de la app" 
                width={150} 
                height={150} 
              />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <ThemeToggle />
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className={`px-3 py-2 rounded ${pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/cart" className="flex items-center p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l1 9h11l1-9h2M4 14h12m-6 4h6"></path>
            </svg>
          </Link>
          <button className="flex items-center p-2" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed inset-y-0 right-0 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden w-64`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {menuItemsMobile.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className={`px-3 py-2 rounded ${pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'}`} 
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

