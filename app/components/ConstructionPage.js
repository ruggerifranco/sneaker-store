'use client';
import Link from 'next/link';

const ConstructionPage = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Estamos en Construcción</h1>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    Nuestro sitio web está actualmente en construcción. Volveremos pronto con una nueva experiencia.
                </p>
                <Link href="/" className="text-blue-500 hover:underline dark:text-blue-400">
                        Volver a la página de inicio
                </Link>
            </div>
        </div>
    );
};

export default ConstructionPage;
