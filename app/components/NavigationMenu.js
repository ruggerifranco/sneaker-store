'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const fetchCategories = async () => {
    try {
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        return data.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)); 
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

const NavigationMenu = () => {
    const [categories, setCategories] = useState([]);
    const path = usePathname();

    useEffect(() => {
        const getCategories = async () => {
            const categoriesData = await fetchCategories();
            setCategories(categoriesData);
        };
        getCategories();
    }, []);

    return (
        <div className='bg-gray-800 dark:bg-gray-900 p-4 mb-10'>
            <nav className='flex flex-col md:flex-row items-center justify-center'>
                <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                    <li className={`text-white dark:text-gray-300 ${path === '/shop' ? 'underline' : 'no-underline'} transition-all duration-300 hover:underline`}>
                        <Link href="/shop">Todas</Link>
                    </li>
                    
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className={`text-white dark:text-gray-300 ${path === `/shop/${category.toLowerCase()}` ? 'underline' : 'no-underline'} transition-all duration-300 hover:underline`}
                        >
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
