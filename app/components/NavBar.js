'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useCartContext } from '../context/CartContext';
import CartMenu from './CartMenu';
import { useAuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();
  const { getTotalQuantity } = useCartContext();
  const cartCount = getTotalQuantity();

  useEffect(() => {
    if (pathname === '/cart') {
      setIsCartOpen(false);
    }
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCartMenu = () => setIsCartOpen(!isCartOpen);

  const menuItems = [
    { href: "/shop", label: "Tienda" },
    { href: "/contact", label: "Contacto" },
    { href: "/aboutUs", label: "Nosotros" },
    { href: "/admin", label: "Admin"},
  ];

  const menuItemsMobile = [
    { href: "/shop", label: "Tienda" },
    { href: "/contact", label: "Contacto" },
    { href: "/aboutUs", label: "Nosotros" },
    { href: "/admin", label: "Admin" },
  ];

  return (
    <nav className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/sneaker-logo.png"
              alt="Logo de la app"
              width={150}
              height={150}
              className="transition-transform transform hover:scale-105"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <ThemeToggle />
          {menuItems.filter(item => !item.requiresAuth || user.logged).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-3 py-2 rounded ${pathname.startsWith(item.href) ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative flex items-center cursor-pointer transition-transform transform hover:scale-105"
            onClick={toggleCartMenu}
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 transform translate-x-1 translate-y-1">
                {cartCount}
              </span>
            )}
          </div>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <div
            className="relative flex items-center cursor-pointer transition-transform transform hover:scale-105"
            onClick={toggleCartMenu}
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 transform translate-x-1 translate-y-1">
                {cartCount}
              </span>
            )}
          </div>
          <button className="flex items-center p-2" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <CartMenu isOpen={isCartOpen} onClose={toggleCartMenu} />

      <div className={`fixed inset-y-0 right-0 bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden w-64`} style={{ zIndex: 9999 }}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {menuItemsMobile.filter(item => !item.requiresAuth || user.logged).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-3 py-2 rounded ${pathname.startsWith(item.href) ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
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