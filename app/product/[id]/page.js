'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useCartContext } from '@/app/context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/config';
import SkeletonCard from '@/app/components/SkeletonCard';
import { useNotificationContext } from '@/app/context/NotificationContext';
import ProductCard from '@/app/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCartContext();
  const { showNotification } = useNotificationContext();

  const getProduct = async (id) => {
    try {
      const productsRef = collection(db, 'products');
      const q = query(productsRef, where('id', '==', parseInt(id)));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const getRelatedProducts = useCallback(async (category) => {
    try {
      const productsRef = collection(db, 'products');
      const q = query(productsRef, where('category', '==', category));
      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => doc.data());
      return products.filter(p => p.id !== parseInt(id));
    } catch (error) {
      return [];
    }
  }, [id]);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      if (product) {
        setProduct(product);
        const related = await getRelatedProducts(product.category);
        setRelatedProducts(related);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [id, getRelatedProducts]);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addToCart(product);
      showNotification('Producto agregado correctamente');
    } catch (error) {
      showNotification('Error al agregar el producto al carrito');
    } finally {
      setIsAdding(false);
    }
  };

  if (isLoading) return <SkeletonCard />;

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
        <div className="relative w-full lg:w-1/2 h-80 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-40 dark:from-gray-900 dark:opacity-60"></div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">${product.price} USD</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
          <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
            <p className="text-gray-600 dark:text-gray-400 mb-2 md:mb-0">Marca: <span className="font-semibold">{product.brand}</span></p>
            <p className="text-gray-600 dark:text-gray-400">Categoría: <span className="font-semibold">{product.category}</span></p>
          </div>
          <button
            className={`mt-4 flex items-center px-4 py-2 ${isAdding ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 dark:bg-indigo-500'} text-white font-semibold rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-colors duration-300`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? (
              <>Agregando...</>
            ) : (
              <>
                <ShoppingCartIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                Agregar al carrito
              </>
            )}
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
