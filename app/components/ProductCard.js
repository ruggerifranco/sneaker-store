'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useCartContext } from '../context/CartContext';
import { useNotificationContext } from '../context/NotificationContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();
  const { showNotification } = useNotificationContext();
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);

  const handleNavigateToProduct = () => {
    router.push(`/product/${product.id}`);
  };

  const handleAddToCart = async (event) => {
    event.stopPropagation();
    setIsAdding(true);

    setTimeout(() => {
      addToCart(product);
      showNotification('Producto agregado correctamente');
      setIsAdding(false);
    }, 1000); 
  };

  return (
    <div
      className="block max-w-xs mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={handleNavigateToProduct}
    >
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-40 dark:from-gray-900 dark:opacity-50"></div>
      </div>

      <div className="p-4 flex h-[250px] flex-col bg-gray-100 dark:bg-gray-900">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{product.name}</h2>
        <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">${product.price} USD</p>
        <p className="text-gray-700 dark:text-gray-300 mb-2 flex-grow truncate">{product.description}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-1">Marca: <span className="font-semibold">{product.brand}</span></p>
        <p className="text-gray-600 dark:text-gray-400">Categoría: <span className="font-semibold">{product.category}</span></p>

        <button
          className={`mt-4 flex items-center px-4 py-2 ${isAdding ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 dark:bg-indigo-500'} text-white font-semibold rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-colors duration-300`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? (
            <>
            Agregando...
          </>
          ) : (
            <>
              <ShoppingCartIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
