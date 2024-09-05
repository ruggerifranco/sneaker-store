import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image'; 
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';

const ProductTable = ({ products, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleDelete = (id) => {
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
                onDelete(id);
                Swal.fire(
                    'Eliminado!',
                    'Tu producto ha sido eliminado.',
                    'success'
                );
            }
        });
    };

    return (
        <div className='p-4'>
            <h2 className='text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
                Lista de Productos
            </h2>
            <div className='overflow-x-auto'>
                <table className='w-full min-w-full border-collapse bg-white dark:bg-gray-800'>
                    <thead className='bg-gray-200 dark:bg-gray-700'>
                        <tr>
                            <th className='border p-2 text-left text-gray-900 dark:text-gray-100'>Nombre</th>
                            <th className='border p-2 text-left text-gray-900 dark:text-gray-100'>Marca</th>
                            <th className='border p-2 text-left text-gray-900 dark:text-gray-100'>Categoría</th>
                            <th className='border p-2 text-left text-gray-900 dark:text-gray-100'>Descripción</th>
                            <th className='border p-2 text-left text-gray-900 dark:text-gray-100'>Imagen</th>
                            <th className='border p-2 text-left text-gray-900 dark:text-gray-100'>Precio</th>
                            <th className='border p-2 text-left text-gray-900 dark:text-gray-100'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white dark:bg-gray-800'>
                        {currentProducts.map((product) => (
                            <tr key={product.id} className='hover:bg-gray-100 dark:hover:bg-gray-600'>
                                <td className='border p-2 text-gray-900 dark:text-gray-100'>{product.name}</td>
                                <td className='border p-2 text-gray-900 dark:text-gray-100'>{product.brand}</td>
                                <td className='border p-2 text-gray-900 dark:text-gray-100'>{product.category}</td>
                                <td className='border p-2 text-gray-900 dark:text-gray-100'>{product.description}</td>
                                <td className='border p-2'>
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        width={64} 
                                        height={64} 
                                        className='w-16 h-16 object-cover'
                                    />
                                </td>
                                <td className='border p-2 text-gray-900 dark:text-gray-100'>{product.price}</td>
                                <td className='border p-2 flex space-x-2 h-20'>
                                    <button
                                        onClick={() => onEdit(product)}
                                        className='p-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white transition-colors'
                                        aria-label="Editar producto"
                                    >
                                        <PencilIcon className='w-5 h-5' />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className='p-2 rounded bg-red-500 hover:bg-red-600 text-white transition-colors'
                                        aria-label="Eliminar producto"
                                    >
                                        <TrashIcon className='w-5 h-5' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-4 flex flex-wrap justify-center gap-2'>
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

export default ProductTable;
