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
            <div>
            <CartItemImage src={item.image} alt={item.name} className="product-image" />

            <span>{item.name}</span>
            <span>${item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Total: ${item.totalPrice}</span>
            </div>
            <button onClick={() => onRemove(item)}>Remove</button>           
        </CartItemContainer>
    );
}

export default CartItem;
