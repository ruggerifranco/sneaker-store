import ProductList from '@/app/components/ProductList';
import React from 'react'

const getProducts = async (category) => {
    const data = await fetch(`http://localhost:3000/api/productos/${category}`,
        {
            cache: 'no-store'
        }
    )
    const productos = await data.json();
    return productos;
}

const Category = async  ({ params }) => {
    const { category } = params;
    const products = await getProducts(category)

    return (
        <>
            <ProductList category={category} data={products} />
        </>
    )
}

export default Category