import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  // Update these names to match what the tests are looking for
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Phone", price: 499.99, inStock: false },
    { id: 3, name: "Tablet", price: 299.99, inStock: true },
  ]);

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemoveProduct={handleRemoveProduct} />
    </div>
  );
}

export default App;