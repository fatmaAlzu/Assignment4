import React, { useState } from 'react';
import styled from 'styled-components';

const ProductItemContainer = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
`;

const ProductName = styled.div`
  font-weight: bold;
`;

const ProductItem = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <ProductItemContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      {showDescription && <div>{product.description}</div>}
      <div>${product.price}</div>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </ProductItemContainer>
  );
};

export default ProductItem;
