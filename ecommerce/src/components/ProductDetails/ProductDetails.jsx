import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://ecommerce-node4-five.vercel.app/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data.product))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; 
  }
    return (
      <div className="product-details">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src={product.mainImage.secure_url} alt={product.name}/>
            </div>
            <div className="col-md-5">
              <h1>{product.name}</h1>
              <p>4.9<FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }}/>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }}/>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700'}}/>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }}/>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }}/></p>
              <p className='description'>{product.description}</p>
              <div style={{fontWeight: 'bold', fontSize: '15px'}}>
              <p style={{marginTop: '30px'}}>Dimension: 44" W x 44" D x 38" H</p>
              <p>Price: ${product.price}</p>
              <p>Material: Wood</p>
              <p>Color: Brown</p>
              </div>
              <div className="button-container">
                <button className="button1">Add to cart</button>
                <button className="button2">Wish List</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default ProductDetails;
