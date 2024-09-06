import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image'; 
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';

const ProductCard = ({ product, onEdit, onDelete }) => {
    const handleDelete = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(product.id);
                Swal.fire(
                    'Eliminado!',
                    'Tu producto ha sido eliminado.',
                    'success'
                );
            }
        });
    };

    return (
        <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center'>
            <div className='w-32 h-32 mb-4'>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={128} 
                    height={128} 
                    className='w-full h-full object-cover rounded'
                />
            </div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>{product.name}</h3>
            <p className='text-gray-700 dark:text-gray-300 mb-2'>{product.description}</p>
            <p className='text-gray-900 dark:text-gray-100 mb-4'>{product.price}</p>
            <div className='flex space-x-2'>
                <button
                    onClick={() => onEdit(product)}
                    className='p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded'
                    aria-label="Editar producto"
                >
                    <PencilIcon className='w-5 h-5' />
                </button>
                <button
                    onClick={handleDelete}
                    className='p-2 bg-red-500 hover:bg-red-600 text-white rounded'
                    aria-label="Eliminar producto"
                >
                    <TrashIcon className='w-5 h-5' />
                </button>
            </div>
        </div>
    );
};

const ProductList = ({ products, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; 

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
                {currentProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                    />
                ))}
            </div>

            <div className='flex justify-center gap-2'>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`p-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-600 dark:text-gray-100'} transition-colors`}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
