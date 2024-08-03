'use client';
import Button from '@/app/components/Button';
import mockData from '../../data/mockData';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter(); 

  const product = mockData.find(p => p.id === parseInt(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button
        onClick={() => router.back()}
        className="mb-6"
      >
        Volver
      </Button>

      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500} 
            height={500} 
            className="object-cover " 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-40"></div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
        <p className="text-lg font-semibold text-indigo-600 mb-4">${product.price} USD</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
          <p className="text-gray-600 mb-2 md:mb-0">Marca: <span className="font-semibold">{product.brand}</span></p>
          <p className="text-gray-600">Categoría: <span className="font-semibold">{product.category}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
