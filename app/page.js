import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <section className="bg-gray-800 dark:bg-gray-800 text-white dark:text-gray-200 text-center py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a SneakerStore</h1>
          <p className="text-lg mb-8">
            Descubre las últimas tendencias en zapatillas importadas. Desde modelos exclusivos hasta los clásicos favoritos, tenemos algo para cada amante de las sneakers.
          </p>
          <Link href="/shop" className="bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-900 px-6 py-3 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">
            Explorar Colección
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/aboutUs.jpg"  
              alt="Sobre Nosotros"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>
            <p className="text-lg mb-4">
              En SneakerStore, nos especializamos en ofrecer zapatillas importadas de alta calidad para todos los gustos. Nuestro compromiso es brindarte los mejores modelos del mercado y un servicio excepcional. Explora nuestra tienda y encuentra tu próximo par favorito.
            </p>
            <Link href="/aboutUs" className="text-blue-500 dark:text-blue-300 hover:underline">
              Leer Más
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Marcas Destacadas</h2>
          <p className="text-lg mb-8">
            Trabajamos con las mejores marcas para garantizar la calidad y estilo en cada par de zapatillas. Conoce nuestras marcas destacadas y encuentra tus favoritas.
          </p>
        </div>
      </section>

      <section className="bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-200 text-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¡No te lo pierdas!</h2>
          <p className="text-lg mb-8">
            Suscríbete a nuestro boletín para recibir las últimas noticias, ofertas y lanzamientos exclusivos directamente en tu bandeja de entrada.
          </p>
          <Link href="/subscribe" className="bg-white dark:bg-gray-800 text-blue-500 dark:text-white px-6 py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Suscribirse
          </Link>
        </div>
      </section>
    </div>
  );
}
