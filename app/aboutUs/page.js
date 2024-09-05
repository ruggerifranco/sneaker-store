import React from 'react';

export const metadata = {
    title: "Sobre nosotros",
    description: "Exclusivas zapatillas deportivas y de moda",
    keywords: ['moda', 'zapatillas', 'importadas', 'precios', 'deporte']
}

const AboutUs = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-800 p-6 shadow-md">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">
                        Quiénes Somos
                    </h1>
                </div>
            </header>
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <section className="text-center mb-12">
                        <h2 className="text-4xl font-semibold mb-4 transition-transform transform hover:scale-105 duration-300">
                            Nuestra Historia
                        </h2>
                        <p className="text-lg">
                            En <strong>SneakerStore</strong>, somos apasionados por las zapatillas. Desde nuestros inicios, hemos trabajado incansablemente para ofrecerte lo mejor en calzado deportivo e importado. Nuestra tienda en línea se ha convertido en el destino preferido para los entusiastas de las zapatillas gracias a nuestra dedicación a la calidad, los precios competitivos y las últimas tendencias en moda.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                            <h2 className="text-3xl font-semibold mb-4">Nuestra Misión</h2>
                            <p className="text-lg">
                                Nuestra misión es proporcionar a nuestros clientes un acceso sin igual a las últimas y más exclusivas zapatillas deportivas y de moda. Nos enorgullece ofrecer productos de alta calidad con un servicio al cliente excepcional, asegurándonos de que cada compra sea una experiencia memorable.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                            <h2 className="text-3xl font-semibold mb-4">Nuestra Visión</h2>
                            <p className="text-lg">
                                Aspiramos a ser la tienda en línea líder en calzado deportivo e importado, estableciendo estándares elevados en calidad y estilo. Buscamos expandir nuestra oferta, manteniéndonos a la vanguardia de las tendencias y brindando a nuestros clientes una experiencia de compra insuperable.
                            </p>
                        </div>
                    </section>

                    <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
                        <h2 className="text-3xl font-semibold mb-4 text-center">¿Por Qué Elegirnos?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                                <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
                                <p>
                                    Trabajamos con los mejores fabricantes para asegurarnos de que cada par de zapatillas que ofrecemos cumpla con nuestros altos estándares de calidad.
                                </p>
                            </div>
                            <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                                <h3 className="text-xl font-semibold mb-2">Precios Únicos</h3>
                                <p>
                                    Ofrecemos precios competitivos y promociones exclusivas, para que puedas encontrar tus zapatillas favoritas sin romper el banco.
                                </p>
                            </div>
                            <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                                <h3 className="text-xl font-semibold mb-2">Últimos Modelos</h3>
                                <p>
                                    Siempre estamos actualizando nuestro inventario con los modelos más recientes y populares para que estés a la moda.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-4 transition-transform transform hover:scale-105 duration-300">¡Únete a Nuestra Comunidad!</h2>
                        <p className="text-lg">
                            Síguenos en nuestras redes sociales y únete a la conversación. Sé el primero en conocer nuestras últimas ofertas y lanzamientos. ¡Estamos emocionados de tenerte como parte de la familia <strong>SneakerStore</strong>!
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AboutUs;

