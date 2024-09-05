import ProductList from '@/app/components/ProductList';
import React from 'react';


export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Sneaker Store - ${params.category}`,
    }
}

export function generateStaticParams() {
    return [
        { category: 'todas' },
        { category: 'deportivas' },
        { category: 'running' },
        { category: 'urbanas' },
        { category: 'entrenamiento' },
        { category: 'casuales' }
    ]
}

export const revalidate = 3600;

const getProducts = async (category) => {

    const data = await fetch(`https://sneaker-store-p067dcnyu-francos-projects-29f92f5e.vercel.app/${category}`, {
        cache: 'no-store'
    });
    const productos = await data.json();
    return productos;
}

const Category = async ({ params }) => {
    const { category } = params;
    const products = await getProducts(category);

    return (
        <>
            <ProductList category={category} data={products} />
        </>
    );
}

export default Category;
