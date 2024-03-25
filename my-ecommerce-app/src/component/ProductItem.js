import React, { useState } from 'react';
import styled from 'styled-components';

const ProductItemContainer = styled.div`
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
      <img width="250px" src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <div>${product.price}</div>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      {showDescription && <div>{product.description}</div>}
    </ProductItemContainer>
  );
};

export default ProductItem;
