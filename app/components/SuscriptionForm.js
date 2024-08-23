'use client'
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, ingresa una dirección de correo electrónico válida.');
            setIsSubmitting(false);
            return;
        }

        // Simula el envío del formulario
        setTimeout(() => {
            setIsSubmitting(false);
            setEmail('');
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Te has suscrito exitosamente.',
            });
        }, 1000);
    };

    return (
        <section className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Únete a Nuestra Comunidad</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                {error && (
                    <p className="text-red-400 mb-4">{error}</p>
                )}
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                />
                <button
                    type="submit"
                    className={`p-2 rounded ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2 animate-spin text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 018-8V3M12 4a8 8 0 000 16v-1M4 12a8 8 0 008-8 8 8 0 000 16A8 8 0 014 12z"></path>
                            </svg>
                            Enviando...
                        </span>
                    ) : 'Suscribirse'}
                </button>
            </form>
        </section>
    );
};

export default SubscriptionForm;
