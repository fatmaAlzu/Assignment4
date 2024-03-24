import React from 'react';
import productsData from '../data/products';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-grid">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

