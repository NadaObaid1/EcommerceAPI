import React, { useState, useEffect, useContext } from 'react';
import './Cart.css';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';

const Cart = () => {
  const { token } = useContext(AuthContext); // Use token from context
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`https://ecommerce-node4-five.vercel.app/cart`, {
        headers: {
          'Authorization': `Tariq__${token}`,
        },
      });
      const data = response.data;
      if (data.products) {
        setCartItems(data.products);
        const totalPrice = data.products.reduce((total, item) => total + (item.details.finalPrice * item.quantity), 0);
        setTotalPrice(totalPrice);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, [token]);

  const handleIncreaseQuantity = async (productId) => {
    try {
      const response = await axios.patch(`https://ecommerce-node4-five.vercel.app/cart/incraseQuantity`, {
        productId: productId
      }, {
        headers: {
          'Authorization': `Tariq__${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data.message === 'success') {
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const handleDecreaseQuantity = async (productId) => {
    try {
      const response = await axios.patch(`https://ecommerce-node4-five.vercel.app/cart/decraseQuantity`, {
        productId: productId
      }, {
        headers: {
          'Authorization': `Tariq__${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data.message === 'success') {
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const response = await axios.patch(`https://ecommerce-node4-five.vercel.app/cart/removeItem`, {
        productId: productId
      }, {
        headers: {
          'Authorization': `Tariq__${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data.message === 'success') {
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
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
