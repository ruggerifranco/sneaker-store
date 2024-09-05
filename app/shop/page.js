import ProductList from '@/app/components/ProductList';

const Home = async () => {
    const res = await fetch('/api/productos', {
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
