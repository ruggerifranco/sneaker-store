'use client'
import ProductList from '@/app/components/ProductList';
import mockData from '@/app/data/mockData';
import { useParams } from 'next/navigation';
import React from 'react'

const Category = () => {
    const { category } = useParams();
    const filterData = category === 'all' ? mockData : mockData.filter((item) => item.category.toLowerCase() === category.toLowerCase())

    return (
        <>
            <ProductList category={category} data={filterData} />
        </>
    )
}

export default Category