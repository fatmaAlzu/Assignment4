import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
    margin: 10px;
    padding: 10px;
`;

const CartItemImage = styled.img`
    width: 250px;
`;

function CartItem({ item, onRemove }) {

    return (
        <CartItemContainer>
            <div>
            <CartItemImage src={item.image} alt={item.name} className="product-image" />

            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.totalPrice}</p>
            </div>
            <button onClick={() => onRemove(item)}>Remove</button>           
        </CartItemContainer>
    );
}

export default CartItem;
