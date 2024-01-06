import React from 'react';
import './styles/Product.scss';
import { Link } from 'react-router-dom';
import imgData from './ImageData';
const Product = () => {
  return (
    <div className='product'>
      <div className='product-banner'>
        <h1>Our Product</h1>
        <p><Link to='/' className='goback-home'>Home</Link> {'>'} <Link to=''>Products</Link></p>
      </div>

      <div className='product-container'>

        <div className='product-menu'>
          <div className='product-card'>
            <img src={imgData.image1} alt='img' className='product-image-items' />
            <div className='product-short-info'>
              <h1>Pure Cheese</h1>
              <p>&#x20B9;400 - &#x20B9;999</p>
              <Link to='/productdetail'>
                <button className='product-buy'>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
