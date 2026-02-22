import React from 'react';
import ProductCard from './ProductCard'; // Check this path!

const ProductList = ({ products, onRemoveProduct }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onRemove={onRemoveProduct} 
        />
      ))}
    </div>
  );
};

// CRITICAL: Ensure this line exists!
export default ProductList;