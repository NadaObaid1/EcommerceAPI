import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://ecommerce-node4-five.vercel.app/cart', {
      method: 'GET',
      headers: {
        'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY0Njc5MjF9.Qv9DkM0jRF_fKiZoelu7FlZEPOL8Dtwy3tKukJ9Ac8Q',
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.products) {
        setCartItems(data.products);
        const totalPrice = data.products.reduce((total, item) => total + (item.details.finalPrice * item.quantity), 0);
        setTotalPrice(totalPrice);
      }
    })
    .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleIncreaseQuantity = (productId) => {
    fetch(`https://ecommerce-node4-five.vercel.app/cart/incraseQuantity`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY0Njc5MjF9.Qv9DkM0jRF_fKiZoelu7FlZEPOL8Dtwy3tKukJ9Ac8Q',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        fetch('https://ecommerce-node4-five.vercel.app/cart', {
        method: 'GET',
        headers: {
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY0Njc5MjF9.Qv9DkM0jRF_fKiZoelu7FlZEPOL8Dtwy3tKukJ9Ac8Q',
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.products) {
          setCartItems(data.products);
          const totalPrice = data.products.reduce((total, item) => total + (item.details.finalPrice * item.quantity), 0);
          setTotalPrice(totalPrice);
        }
      })
      .catch(error => console.error('Error fetching cart items:', error));
        
      }
    })
    .catch(error => console.error('Error increasing quantity:', error));
  };
  

  const handleDecreaseQuantity = (productId) => {
    fetch(`https://ecommerce-node4-five.vercel.app/cart/decraseQuantity`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY0Njc5MjF9.Qv9DkM0jRF_fKiZoelu7FlZEPOL8Dtwy3tKukJ9Ac8Q',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        fetch('https://ecommerce-node4-five.vercel.app/cart', {
        method: 'GET',
        headers: {
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY0Njc5MjF9.Qv9DkM0jRF_fKiZoelu7FlZEPOL8Dtwy3tKukJ9Ac8Q',
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.products) {
          setCartItems(data.products);
          const totalPrice = data.products.reduce((total, item) => total + (item.details.finalPrice * item.quantity), 0);
          setTotalPrice(totalPrice);
        }
      })
      .catch(error => console.error('Error fetching cart items:', error));
        
      }
    })
    .catch(error => console.error('Error increasing quantity:', error));
  };

  const handleRemoveItem = (productId) => {
    fetch(`https://ecommerce-node4-five.vercel.app/cart/removeItem`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY0Njc5MjF9.Qv9DkM0jRF_fKiZoelu7FlZEPOL8Dtwy3tKukJ9Ac8Q',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        fetch('https://ecommerce-node4-five.vercel.app/cart', {
        method: 'GET',
        headers: {
          'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY0Njc5MjF9.Qv9DkM0jRF_fKiZoelu7FlZEPOL8Dtwy3tKukJ9Ac8Q',
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.products) {
          setCartItems(data.products);
          const totalPrice = data.products.reduce((total, item) => total + (item.details.finalPrice * item.quantity), 0);
          setTotalPrice(totalPrice);
        }
      })
      .catch(error => console.error('Error fetching cart items:', error));
        
      }
    })
    .catch(error => console.error('Error increasing quantity:', error));
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.productId} className="cart-item">
            <img src={item.details.mainImage.secure_url} alt={item.details.name} />
            <div className="item-details">
              <h5>{item.details.name}</h5>
              <p>Price: ${item.details.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>finalPrice: ${item.details.finalPrice}</p>
              <button onClick={() => handleIncreaseQuantity(item.productId)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item.productId)}>-</button>
              <button onClick={() => handleRemoveItem(item.productId)}>Remove</button>
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
