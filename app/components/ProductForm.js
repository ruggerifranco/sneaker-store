import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ProductForm = ({ product, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        category: '',
        price: 0,
        brand: '',
        description: '',
        image: ''
    });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (product) {
            setFormData({
                id: product.id || null,
                name: product.name || '',
                category: product.category || '',
                price: product.price || null,
                brand: product.brand || '',
                description: product.description || '',
                image: product.image || ''
            });
        } else {
            setFormData({
                id: 0,
                name: '',
                category: '',
                price: 0,
                brand: '',
                description: '',
                image: ''
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            await onSave(formData);
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: product ? 'Producto actualizado exitosamente.' : 'Producto agregado exitosamente.',
            });
            setFormData({
                id: '',
                name: '',
                category: '',
                price: '',
                brand: '',
                description: '',
                image: ''
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo guardar el producto.',
            });
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            id: '',
            name: '',
            category: '',
            price: '',
            brand: '',
            description: '',
            image: ''
        });
        onCancel();
    };

    return (
        <div className='mt-6 mb-6 p-4 bg-white dark:bg-gray-900 rounded shadow-md'>
            <h2 className='text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
                {product ? 'Editar Producto' : 'Agregar Nuevo Producto'}
            </h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='col-span-2'>
                    <input
                        type='number'
                        name='id'
                        placeholder='ID del Producto'
                        value={formData.id}
                        onChange={handleChange}
                        className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black'
                        required
                        disabled={isSaving}
                    />
                </div>
                <input
                    type='text'
                    name='name'
                    placeholder='Nombre'
                    value={formData.name}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black'
                    required
                    disabled={isSaving}
                />
                <input
                    type='text'
                    name='category'
                    placeholder='Categoría'
                    value={formData.category}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black'
                    required
                    disabled={isSaving}
                />
                <input
                    type='text'
                    name='brand'
                    placeholder='Marca'
                    value={formData.brand}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black'
                    required
                    disabled={isSaving}
                />
                <textarea
                    name='description'
                    placeholder='Descripción'
                    value={formData.description}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black'
                    required
                    disabled={isSaving}
                />
                <input
                    type='text'
                    name='image'
                    placeholder='URL de Imagen'
                    value={formData.image}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black'
                    required
                    disabled={isSaving}
                />
                <input
                    type='number'
                    name='price'
                    placeholder='Precio'
                    value={formData.price}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black'
                    required
                    disabled={isSaving}
                />
                <button
                    type='submit'
                    className={`p-2 rounded ${isSaving ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
                    disabled={isSaving}
                >
                    {product ? 'Actualizar Producto' : 'Agregar Producto'}
                </button>

                <button
                    type='button'
                    onClick={handleCancel}
                    className='p-2 rounded bg-red-500 hover:bg-red-600 text-white transition-colors'
                    disabled={isSaving}
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default ProductForm;


