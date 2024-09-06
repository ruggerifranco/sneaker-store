'use client';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { collection, getDocs, setDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductForm from '../components/admin/ProductForm';
import SkeletonCard from '../components/SkeletonCard';
import SkeletonAdminCard from '../components/admin/SkeletonTable';

const ProductTable = lazy(() => import('../components/admin/ProductTable'));
const SkeletonTable = lazy(() => import('../components/admin/SkeletonTable'));

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsRef = collection(db, 'products');
                const querySnapshot = await getDocs(productsRef);
                const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddProduct = async (product) => {
        if (!product.id) {
            toast.error('Debe proporcionar un ID para el producto.');
            return;
        }

        try {
            const productRef = doc(db, 'products', product.id);
            await setDoc(productRef, product);  
            setProducts([...products, product]);
            toast.success('Producto agregado exitosamente');
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('Error al agregar producto');
        }
    };

    const handleUpdateProduct = async (updatedProduct) => {
        try {
            const productRef = doc(db, 'products', updatedProduct.id);
            await updateDoc(productRef, updatedProduct);
            setProducts(products.map(product => product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product));
            setSelectedProduct(null);
            toast.success('Producto actualizado exitosamente');
        } catch (error) {
            console.error('Error updating product:', error);
            toast.error('Error al actualizar producto');
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            const productRef = doc(db, 'products', id);
            await deleteDoc(productRef);
            setProducts(products.filter(product => product.id !== id));
            toast.success('Producto eliminado exitosamente');
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Error al eliminar producto');
        }
    };

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Administrador Dashboard</h1>
            
            <ProductForm 
                product={selectedProduct}
                onSave={selectedProduct ? handleUpdateProduct : handleAddProduct}
                onCancel={() => setSelectedProduct(null)}
            />

            <Suspense fallback={ <SkeletonAdminCard />  }>
                {loading ? (
                    <SkeletonAdminCard />  
                ) : (
                    <ProductTable 
                        products={products}
                        onEdit={(product) => setSelectedProduct(product)}
                        onDelete={handleDeleteProduct}
                    />
                )}
            </Suspense>
        </div>
    );
};

export default AdminPage;
