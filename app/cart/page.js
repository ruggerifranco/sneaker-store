'use client';
import React from 'react';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCartContext();

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>

                {cart.length === 0 ? (
                    <p className="text-lg">Tu carrito está vacío.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                    <div className="ml-4">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Cantidad: {item.quantity}</p>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="mt-2 text-red-500 hover:text-red-600 transition duration-300"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</p>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-300">
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
