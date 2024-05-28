import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext.js';
import './Order.css'

const OrderList = () => {
  const { token } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchOrders = async () => {
    try {
      console.log('Fetching orders with token:', token);
      const response = await axios.get('https://ecommerce-node4-five.vercel.app/order', {
        headers: {
          'Authorization': `Tariq__${token}`,
        },
      });
      console.log('Orders fetched successfully:', response.data);
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    } else {
      console.log('No token available');
    }
  }, [token]);

  return (
    <div className="order-list-page">
      <h1>Orders</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="order-item">
                 <p><strong>Phone Number:</strong> {order.phoneNumber}</p>
                 <p><strong>coupon Name:</strong> {order.couponName}</p>
                 <p><strong>payment Type:</strong> {order.paymentType}</p>
              <ul>
                {order.products.map((product) => (
                  <li key={product._id} className="product-item">
                    <p><strong>Product Name:</strong> {product.productId.name}</p>
                    <p><strong>Description:</strong> {product.productId.description}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                    <p><strong>Unit Price:</strong> ${product.unitPrice}</p>
                    <p><strong>Final Price:</strong> ${product.finalPrice}</p>
                    <img src={product.productId.mainImage.secure_url} alt={product.productId.name} style={{ width: '100px', height: '100px' }} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{fontSize: '30px', color: 'red'}}>No orders found.</p>
      )}
    </div>
  );
};

export default OrderList;
