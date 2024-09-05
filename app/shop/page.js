import ProductList from '@/app/components/ProductList';

const Home = async () => {
    const res = await fetch('https://sneaker-store-1wk7x572d-francos-projects-29f92f5e.vercel.app/api/productos', {
        cache: 'no-store',  
    });
    const products = await res.json();

    return (
        <>
            <ProductList category={'all'} data={products} />
        </>
    );
};

export default Home;
