import React, { useState } from 'react';
import './styles/Blog.scss';
import BlogBanner1 from './images/Free Photo _ Cows eating grass in a grass field with small cabins surrounded by trees and mountains.jpg'; // Check this import path
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Blog = () => {

  const [blog, setBlog] = useState([
    {
      blogImage: BlogBanner1,
      blogTitle: "Sustainability On A Dairy Farm",
      blogSubDescription: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      blogDate: "17 Feb. 2020",
      blogAdmin: "By : Admin / Daily, Milk"
    },

    {
      blogImage: BlogBanner1,
      blogTitle: "Sustainability On A Dairy Farm",
      blogSubDescription: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      blogDate: "17 Feb. 2020",
      blogAdmin: "By : Admin / Daily, Milk"
    },

    {
      blogImage: BlogBanner1,
      blogTitle: "Sustainability On A Dairy Farm",
      blogSubDescription: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      blogDate: "17 Feb. 2020",
      blogAdmin: "By : Admin / Daily, Milk"
    },

    {
      blogImage: BlogBanner1,
      blogTitle: "Sustainability On A Dairy Farm",
      blogSubDescription: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
      blogDate: "17 Feb. 2020",
      blogAdmin: "By : Admin / Daily, Milk"
    }
  ]);
  
  return (
    <div className='blog'>
      <div className='blog-banner'>
        <h1>Our Blogs</h1>
        <p><Link to='/' className='goback-home'>Home</Link> {'>'} <Link to=''>Blog</Link></p>
      </div>

      <div className='blog-menu'>
        <div className='blog-left-card'>
          {blog.map((blogCard, index) => (
            <div className='blog-card' key={index}>
              <img src={blogCard.blogImage} alt='img' />
              <div className='detail-blog'>
                <h3>{blogCard.blogDate}</h3>
                <p>{blogCard.blogAdmin}</p>
              </div>
              <hr />
              <div className='blog-card-description'>
                <h2>{blogCard.blogTitle}</h2>
                <p>{blogCard.blogSubDescription}</p>
                <button className='read-more'><Link to='/blogdetail'>Read More</Link></button>
              </div>
            </div>
          ))}
        </div>

        <div className='blog-right-card'>
          <div className='blog-side-card'>
            <div className='search-box'>
              <input type='text' placeholder='your keyWord' className='search-input' />
              <button className='search-btn'><Search className='search' /></button>
            </div>

            <div className='catagories-of-campagion'>
              <h1>Catagories</h1>

              <ul className='campagion-menu'>
                <li>Catagories 1</li>
                <hr />
                <li>Catagories 2</li>
                <hr />
                <li>Catagories 3</li>
                <hr />
                <li>Catagories 4</li>
                <hr />
                <li>Catagories 5</li>
                <hr />
                <li>Catagories 6</li>
              </ul>
            </div>

            <div className='recent-update'>
              <h1>Reacent News</h1>

              <div className='recent-update-menu'>
                <div className='recent-update-card'>
                  <img src={BlogBanner1} alt='img' className='recent-update-blog-img' />
                  <div className='recent-update-card-description'>
                    <h4>Customer Service With Robust On Ideas ...</h4>
                    <p>12 April 2019</p>
                  </div>
                </div>
                <hr />
                <div className='recent-update-card'>
                  <img src={BlogBanner1} alt='img' className='recent-update-blog-img' />
                  <div className='recent-update-card-description'>
                    <h4>Customer Service With Robust On Ideas ...</h4>
                    <p>12 April 2019</p>
                  </div>
                </div>
                <hr />
                <div className='recent-update-card'>
                  <img src={BlogBanner1} alt='img' className='recent-update-blog-img' />
                  <div className='recent-update-card-description'>
                    <h4>Customer Service With Robust On Ideas ...</h4>
                    <p>12 April 2019</p>
                  </div>
                </div>
                <hr />
                <div className='recent-update-card'>
                  <img src={BlogBanner1} alt='img' className='recent-update-blog-img' />
                  <div className='recent-update-card-description'>
                    <h4>Customer Service With Robust On Ideas ...</h4>
                    <p>12 April 2019</p>
                  </div>
                </div>
                <hr />
                <div className='recent-update-card'>
                  <img src={BlogBanner1} alt='img' className='recent-update-blog-img' />
                  <div className='recent-update-card-description'>
                    <h4>Customer Service With Robust On Ideas ...</h4>
                    <p>12 April 2019</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog