import React from 'react';

const Benefits = () => {
    return (
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-center">Beneficios de la Suscripción</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                    <h3 className="text-xl font-semibold mb-2">Ofertas Exclusivas</h3>
                    <p>
                        Obtén acceso anticipado a nuestras promociones y descuentos especiales solo para suscriptores.
                    </p>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                    <h3 className="text-xl font-semibold mb-2">Últimos Lanzamientos</h3>
                    <p>
                        Sé el primero en conocer nuestros nuevos productos y modelos antes que nadie.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
