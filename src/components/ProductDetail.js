import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImgData from './ImageData';
import './styles/ProductDetail.scss';

const ProductDetail = () => {

  const [text, setText] = useState({
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    <br /><br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,

    specification: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  });

  const updateDescriptionProduct = () => {
    const textDesp = document.getElementById('textDescription');
    textDesp.innerHTML = text.description;
  }

  const updateSpecificationProduct = () => {
    const textDescription = document.getElementById('textDescription');
    textDescription.innerHTML = text.specification;
  }

  useEffect(() => {
    updateDescriptionProduct(
    );
  }, []);

  return (
    <div className='product-detail'>
      <div className='product-detail-banner'>
        <h1>Products</h1>
        <p><Link to='/' className='goback-home'>Home</Link> {'>'} <Link to=''>Products</Link></p>
      </div>

      <div className='product-detail-container'>
        <div className='card-img'>
          <img src={ImgData.image1} alt='img' className='product-detail-image' />
        </div>
        <div className='product-detail-card'>
          <h1 className='product-name'>Pure Chees</h1>
          <hr />
          <p className='product-detail-info'>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ untur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          </p>
          <hr />
          <p className='product-price'><strong>Price :</strong> &#x20B9; 1999</p>
          <button className='add-cart'>Add cart</button>
        </div>
      </div>

      <div className='product-detail-sepcification-infomation-product'>
        <div className='product-detail-sepcification-buttons'>
          <button className='product-detail-sepcification-list' onClick={updateDescriptionProduct}>Description</button>
          <button className='product-detail-sepcification-list' onClick={updateSpecificationProduct}>Specification</button>
          <button className='product-detail-sepcification-list'>Review (2)</button>
        </div>

        <div className='product-detail-sepcification-para' id='paraContainer'>
          <p id='textDescription'></p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
