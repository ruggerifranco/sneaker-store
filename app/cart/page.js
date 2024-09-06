'use client';
import React from 'react';
import Image from 'next/image'; 
import { useCartContext } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

const Cart = () => {
    const { cart, removeFromCart } = useCartContext();
    const router = useRouter();

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleCheckout = () => {
        router.push('/checkout'); 
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto py-4 sm:py-8 px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold">Carrito de Compras</h1>
                    <Button
                        onClick={() => router.back()}
                        className="mt-4 sm:mt-0"
                    >
                        Volver
                    </Button>
                </div>

                {cart.length === 0 ? (
                    <p className="text-base sm:text-lg">Tu carrito está vacío.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                <div className="flex items-center">
                                    <Image 
                                        src={item.image} 
                                        alt={item.name} 
                                        width={48} 
                                        height={48} 
                                        className="object-cover rounded-md"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                                <div className="text-right mt-4 sm:mt-0">
                                    <p className="text-lg sm:text-xl font-bold">${item.price.toFixed(2)}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Cantidad: {item.quantity}</p>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="mt-2 text-red-500 hover:text-red-600 transition duration-300 text-sm"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
                            <p className="text-lg sm:text-xl font-bold">Total: ${getTotal().toFixed(2)}</p>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-300 mt-4 sm:mt-0"
                                onClick={handleCheckout}
                            >
                                Proceder al Pago
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
