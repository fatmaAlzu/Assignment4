import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
`;

const CartItemImage = styled.img`
    width: 150px;
    height: 150px;
`;

function CartItem({ item, onRemove }) {
    return (
        <CartItemContainer>
            <CartItemImage src={item.image} alt={item.name} className="product-image" />

            <div>{item.name}</div>
            <div>${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Total: ${item.totalPrice}</div>
            <button onClick={() => onRemove(item)}>Remove</button>
        </CartItemContainer>
    );
}

export default CartItem;
