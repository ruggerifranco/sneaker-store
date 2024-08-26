'use client'
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductList = ({ data, category, itemsPerPage = 12 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      {currentProducts.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">No products available :(</div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
