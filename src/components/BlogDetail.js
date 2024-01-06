import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BlogDetail.scss'
import BlogBanner1 from './images/Free Photo _ Cows eating grass in a grass field with small cabins surrounded by trees and mountains.jpg';
import { Search } from '@mui/icons-material';

const BlogDetail = () => {
    return (
        <div className='BlogDetail'>
            <div className='blog-banner'>
                <h1>Our Blogs</h1>
                <p><Link to='/' className='goback-home'>Home</Link> {'>'} <Link to=''>Blog</Link> {'>'} <Link to=''>Blog Detail</Link></p>
            </div>


            <div className='blogDetail-menu'>
                <div className='blogdetail-information'>
                    <img src={BlogBanner1} alt='img' />

                    <div className='blogdetail-sedule'>
                        <h2>17 Feb. 2020</h2>
                        <h3>Comment 9</h3>
                    </div>
                    <hr />

                    <div className='blogDetail-content'>
                        <h1>Sustainability On A Dairy Farm</h1>

                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <p>Here is main text quis nostrud exercitation ullamco laboris nisi here is itealic text ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla rure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat here is link cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>


                    {/* Comments */}
                    <div className='blogs-comments'>
                        <h2>Comments</h2>

                        <div className=''>
                            <div className='user-comment-card'>
                                <img src={BlogBanner1} alt='img' />
                                <div className='user-comment-information'>
                                    <h3>Sarah John</h3>
                                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                                    <p>08 Feb, 2019 <button className='reply-btn'>Reply</button></p>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className='user-name-text'>
                                <input type='text' placeholder='Your name' className='user-name' />
                                <input type='email' placeholder='Email address' className='user-email-address' />
                            </div>
                            <br />

                            <textarea placeholder='Write message' className='user-comments-message' />
                            <br />

                            <button className='post-comment'>Post Comment</button>
                        </form>
                    </div>
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

export default BlogDetail;