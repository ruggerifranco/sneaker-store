'use client'
import React from 'react'
import mockData from '../data/mockData'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function getUniqueCategories(data) {
    const categories = data.map(item => item.category);
    return [...new Set(categories)];
}

const NavigationMenu = () => {
    const categories = getUniqueCategories(mockData);
    const path = usePathname();
    
    return (
        <div className='bg-gray-800 p-4 mb-10'>
            <nav className='flex flex-col md:flex-row items-center justify-center'>
                <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                    <li className={`text-white ${path === '/shop' ? 'underline' : 'no-underline'}`}>
                        <Link href="/shop">Todas</Link>
                    </li>
                    
                    {categories.map((category, index) => (
                        <li key={index} className={`text-white ${path === `/shop/${category.toLowerCase()}` ? 'underline' : 'no-underline'}`}>
                            <Link href={`/shop/${category.toLowerCase()}`}>
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default NavigationMenu;

