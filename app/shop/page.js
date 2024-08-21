import ProductList from '@/app/components/ProductList';
import AddProducts from '../components/AddProducts';

const Home = async () => {
    const res = await fetch('http://localhost:3000/api/productos', {
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
