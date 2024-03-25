import React, { useEffect, useState } from 'react';
import Header from './header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import '../App.css';

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
    const existingItem = cart.find(item => item.id === itemToRemove.id);
  
    if (existingItem && existingItem.quantity > 1) {
      // Decrease quantity and update totalPrice
      const updatedCart = cart.map(item => {
        if (item.id === itemToRemove.id) {
          return { 
            ...item, 
            quantity: item.quantity - 1, 
            totalPrice: (item.quantity - 1) * item.price // Update totalPrice based on the new quantity
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // Remove the item from the cart if quantity is one
      const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
      setCart(updatedCart);
    }
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
      <div className="table-container">
      <table>
        <tr>
          <td className="product-list"><ProductList onAddToCart={addToCart} /></td>
          <td className="shopping-cart" style={{ verticalAlign: 'top' }}><Cart cartItems={cart} onRemove={removeFromCart} onDecreaseQuantity={decreaseQuantity}/></td>
        </tr>
      </table>
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
