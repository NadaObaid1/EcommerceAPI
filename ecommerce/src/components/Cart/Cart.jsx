import React, { useState } from 'react';
import './Cart.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Sofa', price: 50, quantity: 2, image: require('../assets/h5.jpg') },
    { id: 2, name: 'Bookshelf', price: 60, quantity: 1, image: require('../assets/h6.jpg') },
    { id: 3, name: 'Wardrobe', price: 70, quantity: 3, image: require('../assets/h8.jpg') },
    { id: 4, name: 'Table', price: 40, quantity: 3, image: require('../assets/h7.jpg') }
  ]);

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h5>{item.name}</h5>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
