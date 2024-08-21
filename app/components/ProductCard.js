import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <Link 
      href={`/product/${product.id}`} 
      className="block max-w-xs mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
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
      </div>
    </Link>
  );
};

export default ProductCard;
