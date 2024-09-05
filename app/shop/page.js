import ProductList from '@/app/components/ProductList';

const getProducts = async () => {
    try {
        const response = await fetch('https://sneaker-store-p067dcnyu-francos-projects-29f92f5e.vercel.app/api/productos');
        if (!response.ok) {
            const text = await response.text(); 
            console.error('Failed to fetch:', text);
            throw new Error('Network response was not ok');
        }
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};



const Home = async () => {

    const products = await getProducts();

    return (
        <>
            <ProductList category={'all'} data={products} />
        </>
    );
};

export default Home;
