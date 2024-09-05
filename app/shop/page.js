import ProductList from "../components/ProductList";

const Home = async () => {
    try {
        const res = await fetch('https://sneaker-store-1wk7x572d-francos-projects-29f92f5e.vercel.app/api/productos', {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.statusText}`);
        }

        const products = await res.json();
        
        return (
            <>
                <ProductList category={'all'} data={products} />
            </>
        );
    } catch (error) {
        console.error('Error occurred:', error);
        return <p>Error loading products. Please try again later.</p>;
    }
};

export default Home;
