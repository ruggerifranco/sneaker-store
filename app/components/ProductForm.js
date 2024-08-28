import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase/config';
import { FaFileUpload } from 'react-icons/fa';

const ProductForm = ({ product, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        category: '',
        price: '',
        brand: '',
        description: '',
        image: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (product) {
            setFormData({
                id: product.id || '',
                name: product.name || '',
                category: product.category || '',
                price: product.price || '',
                brand: product.brand || '',
                description: product.description || '',
                image: product.image || ''
            });
            setImageFile(null);
            fileInputRef.current.value = '';
        } else {
            setFormData({
                id: '',
                name: '',
                category: '',
                price: '',
                brand: '',
                description: '',
                image: ''
            });
            setImageFile(null);
            fileInputRef.current.value = '';
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            let imageUrl = formData.image;

            if (imageFile) {
                const imageRef = ref(storage, `images/${imageFile.name}`);
                const snapshot = await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            const productData = { ...formData, image: imageUrl };
            await onSave(productData);

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
            setImageFile(null);
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
        setImageFile(null);
        fileInputRef.current.value = '';
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
                        className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black w-full'
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
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black w-full'
                    required
                    disabled={isSaving}
                />
                <input
                    type='text'
                    name='category'
                    placeholder='Categoría'
                    value={formData.category}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black w-full'
                    required
                    disabled={isSaving}
                />
                <input
                    type='text'
                    name='brand'
                    placeholder='Marca'
                    value={formData.brand}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black w-full'
                    required
                    disabled={isSaving}
                />
                <textarea
                    name='description'
                    placeholder='Descripción'
                    value={formData.description}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black w-full'
                    required
                    disabled={isSaving}
                />
   
                    <input
                        type='file'
                        id='image'
                        name='image'
                        onChange={handleFileChange}
                        className='hidden'
                        ref={fileInputRef}
                        disabled={isSaving}
                    />
                    <label htmlFor='image' className='flex items-center cursor-pointer p-2 border rounded bg-blue-500 hover:bg-blue-600 text-white dark:bg-gray-800 dark:hover:bg-gray-700 w-full mt-2'>
                        <FaFileUpload className='mr-2' />
                        {imageFile ? imageFile.name : (formData.image ? 'Cambiar Imagen' : 'Seleccionar Imagen')}
                    </label>
               
                <input
                    type='number'
                    name='price'
                    placeholder='Precio'
                    value={formData.price}
                    onChange={handleChange}
                    className='p-2 border rounded dark:bg-gray-800 dark:text-white text-black w-full'
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
                > Cancelar
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
