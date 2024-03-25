import React from 'react';
import CartItem from './CartItem';

function Cart ({cartItems, onRemove}){
    const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + item.totalPrice, 0)
    : 0;
    
    return (
        <div>
            <h2> Shopping Cart</h2>
            {cartItems && cartItems.map((item) =>(
                <CartItem key = {item.id} item = {item} onRemove={onRemove}/>
            ))}
            <div> Total Price: ${totalPrice.toFixed(2)}</div>
        </div>
    );
}

export default Cart;
