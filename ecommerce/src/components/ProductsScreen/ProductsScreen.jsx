import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './ProductsScreen.css';

const ProductsScreen = () => {
  const [sort, setSort] = useState('Default Sorting');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-node4-five.vercel.app/products?page=1&limit=10')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSortChange = (event) => {
    setSort(event.target.textContent);
  };

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleAddToCart = (product) => {
    if (!product || !product._id) {
      console.error('Invalid product data:', product);
      toast.error('Invalid product data. Please try again.');
      return;
    }
    const data = {
      productId: product._id,
    };
    fetch('https://ecommerce-node4-five.vercel.app/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY1MDQxNzN9.nkTP-sDM9nd5WtR1qJtxXZ8eH-qnEEHbypbkfAoqONY',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      console.log('Server response status:', response.status);
      if (!response.ok) {
        return response.json().then(errorData => {
          console.error('Server error response:', errorData);
          if (errorData.message === 'product already exists') {
            toast.error('Product already exists in the cart.');
          } else {
            toast.error('Failed to add to cart.');
          }
          throw new Error(`Error: ${errorData.message}`);
        });
      }
      return response.json();
    })
    .then(cartData => {
      console.log('Cart data:', cartData);
      toast.success(`${product.name} added to cart!`, {
        autoClose: 2000
      });
      navigate('/Shop')
    })
    .catch(error => {
      console.error('Error adding to cart:', error.message);
    });
  };
  
  const colors = [
    { name: 'black', count: 1 },
    { name: 'brown', count: 10 },
    { name: 'green', count: 1 },
    { name: 'grey', count: 2 },
    { name: 'white', count: 3 },
  ];

  const sizes = [
    { name: 'Length:180cm | Width:65cm', count: 2 },
    { name: 'Length:120cm | Width:70cm', count: 3 },
    { name: 'Length:150cm | Width:60cm', count: 4 },
    { name: 'Length:140cm | Width:80cm', count: 5 },
  ];

  return (
    <section className="populor-products pt-4 prod">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="categories pt-5">
              <div className="items mb-5">
                <div className="graybox mb-2">Color</div>
                <ul className='Ul'>
                  {colors.map((color) => (
                    <li key={color.name}>
                      <a href={`products/${color.name}`}>{color.name} </a>({color.count})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="items">
                <div className="graybox mb-2">Size</div>
                <ul className='Ul'>
                  {sizes.map((size) => (
                    <li key={size.name}>
                      <a href={`products/${size.name.replace(/ /g, '')}`}>{size.name} </a>({size.count})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="photos">
              <div className="row">
                <section className="portfolio my-5 py-5" id="portfolio">
                  <div className="container">
                    <div className="container2 d-flex justify-content-between">
                      <div className="left-content d-flex">
                        <span className="show">Showing 1–9 of 60 results</span>
                      </div>
                      <div className="right-content">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {sort}
                        </button>
                      </div>
                    </div>
                    <div className="tab-content pt-5" id="myTabContent">
                      <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex="0">
                        <div className="row">
                          {products.map((product) => (
                            <div className="col-md-4" key={product._id}>
                              <div className="portfolio-item position-relative">
                                <div className="overlay d-flex justify-content-center align-items-center">
                                  <div className="add-cart" onClick={() => handleAddToCart(product)}>
                                    <span>ADD TO CART </span><span><FontAwesomeIcon icon={faPlus} /></span>
                                  </div>
                                </div>
                                <Link to={`/products/${product._id}`}>
                                  <img src={product.mainImage.secure_url} className="w-100" alt={product.name} />
                                  <div className="info p-1 d-flex justify-content-between align-items-center">
                                    <div className="desc">
                                      <p>Quicklook<span><i className="fas fa-eye"></i></span></p>
                                    </div>
                                    <Link to={`/ProductDetails/${product._id}`} style={{ textDecoration: 'none' }}>
                                      <div className="desc">
                                        <p>Wishlist<span><i className="fa-regular fa-heart"></i></span></p>
                                      </div>
                                    </Link>
                                  </div>
                                </Link>
                              </div>
                              <div className="info2">
                                <h5 className="m-0">{product.name}</h5>
                                <p className="m-0">
                                  {product.originalPrice && <del>${product.originalPrice}</del>} ${product.price}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductsScreen;
