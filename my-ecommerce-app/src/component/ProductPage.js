import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + product.price };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const newCartItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
      };
      setCart([...cart, newCartItem]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemToDecrease) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemToDecrease.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList onAddToCart={addToCart} /></td>
          <td style={{ verticalAlign: 'top' }}><Cart cart={cart} onRemove={removeFromCart} onDecrease={decreaseQuantity} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
