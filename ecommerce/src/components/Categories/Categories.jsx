import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEye, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Categories.css';

const Categories = () => {
  const [activeList, setActiveList] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('https://ecommerce-node4-five.vercel.app/categories', {
          headers: {
            Authorization: 'Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjRmMzJmMzM2NGFkNjY0NWE3ODY3MiIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoiQWN0aXZlIiwiaWF0IjoxNzAxMTE0ODc4fQ.xQgD48OZrstfqWL96BDdLUxpoX85wXphWHlvjkm-0qE'
          }
        });
        setCategories(data.categories); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleListChange = (direction) => {
    if (direction === 'left' && activeList > 1) {
      setActiveList(activeList - 1);
    } else if (direction === 'right' && activeList < Math.ceil(categories.length / 6)) {
      setActiveList(activeList + 1);
    }
  };

  const getVisibleItems = () => {
    const startIndex = (activeList - 1) * 6;
    return categories.slice(startIndex, startIndex + 6);
  };

  return (
    <section className="portfolio my-5" id="portfolio">
      <div className="container1">
        <div className="d-flex justify-content-center">
          <div className="title">
            <a className="portbtn2 btn-lg" href="#">BEST FASHION DEALS</a>
            <h2>NEW SUMMER COLLECTION</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
          </div>
        </div>

        <div className="tab-content pt-5" id="myTabContent">
          <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex="0">
            <div className="row">
              {getVisibleItems().map((item, index) => (
                <div className="col-md-2" key={item._id}>
                  <div className="portfolio-item position-relative">
                    <div className="overlay d-flex justify-content-center align-items-center">
                      <Link to={`/ProductDetails/${item._id}`} className="add-cart">
                        <span>ADD TO CART </span>
                        <span className='faPlusIcon'><FontAwesomeIcon icon={faPlus} color='#fff' /></span>
                      </Link>
                    </div>
                    <img src={item.image.secure_url} className="w-100" alt={item.name} style={{ height: '35vh' }} />
                    <div className="info d-flex justify-content-between align-items-center">
                      <div className="desc">
                        <p>Quicklook<span><FontAwesomeIcon icon={faEye} /></span></p>
                      </div>
                      <div className="desc">
                        <p>Wishlist <span><FontAwesomeIcon icon={faHeart} /></span></p>
                      </div>
                    </div>
                  </div>
                  <div className="info2">
                    <h5 className="title m-0">{item.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="navigation-arrows">
          <button className="arrow-btnleft" onClick={() => handleListChange('left')} disabled={activeList === 1}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="arrow-btnright" onClick={() => handleListChange('right')} disabled={activeList === Math.ceil(categories.length / 6)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
