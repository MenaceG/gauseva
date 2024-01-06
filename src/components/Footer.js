import React from 'react';
import './styles/Footer.scss';
import { Link } from 'react-router-dom';
import { Email, Send } from '@mui/icons-material';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-menu'>
                <div className='info'>
                    <h1>Gau Seva Dham</h1>
                    <p>
                        854 Lorance Road, Rose Vallery,<br />
                        Orlando, New York 8564,<br />
                        United States.
                    </p>

                    <p>
                        <strong style={{ color: '#000000' }}>
                            <i>Call Us<br />
                                1800 456 7890</i>
                        </strong>
                    </p>
                </div>

                <div className='footer-nav'>
                    <h2>Useful Links</h2>
                    <ul className='footer-link-menu'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>Organic Product</Link></li>
                            <li><Link to='/blog'>BLog</Link></li>
                            <li><Link to='*'>Our Gallary</Link></li>
                            <li><Link to='/blog'>Latest Blogs</Link></li>
                        </ul>

                        <ul>
                            <li><Link to='/'>Meet Our Team</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/campagion'>Campagion</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </ul>
                </div>

                <div className='email-info'>
                    <h1>Newsletter</h1>
                    <p>Get latest updates and offers.</p>
                    <div className='email-send-container'>
                        <input type='email' placeholder='Enter your Email Address' className='footer-email' />
                        <button className='footer-button-email-send'><Send className='send-icon' /></button>
                    </div>
                </div>
            </div>
            <hr />

            <div className='creator-name'>
                <h5>© Copyright Gau Seva Dham . All right reserved.</h5>
                <h5>Create by technoBhrma</h5>
            </div>
        </div>
    )
}

export default Footer;