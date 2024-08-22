import React from 'react';

const SkeletonTable = () => {
    return (
        <div className='p-4'>
            <h2 className='text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
                Lista de Productos
            </h2>
            <div className='overflow-x-auto'>
                <table className='w-full border-collapse min-w-full bg-white dark:bg-gray-800'>
                    <thead className='bg-gray-200 dark:bg-gray-700'>
                        <tr>
                            <th className='border p-3 text-left text-gray-900 dark:text-gray-100'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-24'></div>
                            </th>
                            <th className='border p-3 text-left text-gray-900 dark:text-gray-100'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-24'></div>
                            </th>
                            <th className='border p-3 text-left text-gray-900 dark:text-gray-100'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-24'></div>
                            </th>
                            <th className='border p-3 text-left text-gray-900 dark:text-gray-100'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-32'></div>
                            </th>
                            <th className='border p-3 text-left text-gray-900 dark:text-gray-100'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-24'></div>
                            </th>
                            <th className='border p-3 text-left text-gray-900 dark:text-gray-100'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-24'></div>
                            </th>
                            <th className='border p-3 text-left text-gray-900 dark:text-gray-100'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-32'></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white dark:bg-gray-800'>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <tr key={index} className='animate-pulse'>
                                <td className='border p-3'>
                                    <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded'></div>
                                </td>
                                <td className='border p-3'>
                                    <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded'></div>
                                </td>
                                <td className='border p-3'>
                                    <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded'></div>
                                </td>
                                <td className='border p-3'>
                                    <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded'></div>
                                </td>
                                <td className='border p-3'>
                                    <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded'></div>
                                </td>
                                <td className='border p-3'>
                                    <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded'></div>
                                </td>
                                <td className='border p-3'>
                                    <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded'></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SkeletonTable;
