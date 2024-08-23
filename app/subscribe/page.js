import React from 'react';
import HeaderAbotUs from '../components/HeaderAboutUs';
import Benefits from '../components/Benefits';
import SubscriptionForm from '../components/SuscriptionForm';

const Subscribe = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <HeaderAbotUs />
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <section className="text-center mb-12">
                        <h2 className="text-4xl font-semibold mb-4">¡Mantente al Tanto!</h2>
                        <p className="text-lg mb-8">
                            Suscríbete a nuestro boletín y recibe las últimas noticias, ofertas exclusivas y actualizaciones directamente en tu correo electrónico.
                        </p>
                    </section>
                    <Benefits />
                    <SubscriptionForm />
                </div>
            </main>
        </div>
    );
};

export default Subscribe;
