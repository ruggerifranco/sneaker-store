import ProductList from '@/app/components/ProductList';

const getProducts = async () => {

    const data = await fetch(`/api/productos`, {
        cache: 'no-store'
    });
    const productos = await data.json();
    return productos;
}


const Home = async () => {

    const products = await getProducts();

    return (
        <>
            <ProductList category={'all'} data={products} />
        </>
    );
};

export default Home;
