'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Confirmation = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/'); 
    };

    const handleGoToStore = () => {
        router.push('/shop');
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto py-8 px-4 text-center">
                <h1 className="text-2xl font-bold mb-4">¡Gracias por tu compra!</h1>
                <p className="text-lg mb-6">Tu pedido ha sido recibido y está siendo procesado.</p>
                <div className="space-x-4">
                    <button
                        onClick={handleGoHome}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-300"
                    >
                        Volver al Inicio
                    </button>
                    <button
                        onClick={handleGoToStore}
                        className="bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 transition duration-300"
                    >
                        Volver a la Tienda
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;

