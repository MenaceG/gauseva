import React from 'react';
import './styles/Home.scss';
import Banner from './Banner';
import ServeCard from './ServeCard';
import poster1 from './images/banner-img-3.jpeg';
import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpeg';
import product3 from './images/product-3.jpg';
import product4 from './images/product-4.jpeg';
import varitey1 from './images/gau-seva.jpg';
import varitey2 from './images/campagion-1.jpg';
import { Link } from 'react-router-dom';
import imgData from './ImageData';

const Home = () => {
  return (
    <div className='home'>
      <div><Banner /></div>

      <div><ServeCard /></div>

      <div className='poster'>
        <div className='gradient-overlay'></div>
        <img src={poster1} alt="img" className='poster-img' />
        <div className='poster-description'>
          <h1>Milking Land of Milk & Honey</h1>
          <p>Dairy producers worldwide face similar challenges around animal welfare, farm profitability, food safety and work efficiency. Discover how our customers are solving these challenges. Also known as the land of milk and honey for its rich and vibrant farming tradition.</p>
        </div>
      </div>

      <div className='offers'>
        <div className='offers-heading'>
          <h1>What we Offers</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae.
          </p>
        </div>

        <div className='offers-card-menu'>
          <div className='offer-card'>
            <div className='offer-img'>
              <img src={product1} alt='img' />
            </div>
            <div className='offer-description'>
              <h1>Butter</h1>
              <p>
                Dairy cultivating's been a piece of<br />
                horticulture for long of years.
              </p>
            </div>
          </div>

          <div className='offer-card'>
            <img src={product2} alt='img' />
            <div className='offer-description'>
              <h1>Butter</h1>
              <p>
                Dairy cultivating's been a piece of<br />
                horticulture for long of years.
              </p>
            </div>
          </div>

          <div className='offer-card'>
            <div className='offer-img'>
              <img src={product3} alt='img' />
            </div>
            <div className='offer-description'>
              <h1>Butter</h1>
              <p>
                Dairy cultivating's been a piece of<br />
                horticulture for long of years.
              </p>
            </div>
          </div>

          <div className='offer-card'>
            <div className='offer-img'>
              <img src={product4} alt='img' />
            </div>
            <div className='offer-description'>
              <h1>Butter</h1>
              <p>
                Dairy cultivating's been a piece of<br />
                horticulture for long of years.
              </p>
            </div>
          </div>
        </div>

        <button className='product-button'>View all Products</button>
      </div>

      <div className='product-varitey'>
        <div className='product-varitey-first-card'>
          <img src={varitey1} alt='img' />
          <div className='product-varitey-first-description'>
            <h1>Natural & Organic<br /> Products</h1>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.
            </p>
          </div>
        </div>

        <div className='product-varitey-second-card'>
          <div className='product-varitey-second-description'>
            <h1>Natural & Organic<br /> Products</h1>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.
            </p>
          </div>

          <img src={varitey2} alt='img' />
        </div>
      </div>

      <div className='our-team'>
        <div className='our-team-heading'>
          <h1>Meet Our Teams</h1>
          <p>It’s at the farm, in the store and on your table. Dairy is feeding people today for whatever comes tomorrow.</p>
        </div>

        <div className='our-team-card-menu'>
          
          <div className='our-team-card'>
            <div className='our-team-img'>
              <img src={product1} alt='img' />
            </div>
            <div className='offer-description'>
              <h1>James</h1>
            </div>
          </div>
          
          <div className='our-team-card'>
            <div className='our-team-img'>
              <img src={product1} alt='img' />
            </div>
            <div className='offer-description'>
              <h1>James</h1>
            </div>
          </div>
          
          <div className='our-team-card'>
            <div className='our-team-img'>
              <img src={product1} alt='img' />
            </div>
            <div className='offer-description'>
              <h1>James</h1>
            </div>
          </div>
          
          <div className='our-team-card'>
            <div className='our-team-img'>
              <img src={product1} alt='img' />
            </div>
            <div className='offer-description'>
              <h1>James</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='shop'>
        <div className='product-heading'>
          <h1>Our Shop</h1>
          <p>
            Dairy foods like low-fat or fat-free milk, yogurt and cheese are fundamental to good nutrition. Healthy eating styles that include
            fat-free or low-fat dairy foods have been linked to health benefits.
          </p>
          <div className='product-menu-card'>
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



      <div className='blog-colum'>
        <h1>Latest Blog</h1>
        <p>Farm proud blog from our dedicated farmers</p>
        <div className='blog-menu'>
          <div className='blog-full-img-card'>
            <img src={imgData.image1} alt='img' />
            <div className='blog-info-heading'>
              <h2>Earth Is What We All Have in Common...</h2>
            </div>
          </div>

          <div className='blog-card'>
            <img src={imgData.image1} alt='img' />
            <div className='blog-info-heading'>
              <h2>Earth Is What We All Have in Common...</h2>
            </div>
          </div>

          <div className='blog-card'>
            <img src={imgData.image1} alt='img' />
            <div className='blog-info-heading'>
              <h2>Earth Is What We All Have in Common...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;