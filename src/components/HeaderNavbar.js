import React from 'react';
import { Link } from 'react-router-dom';
import { Call, ShareLocation, Facebook, Telegram, Twitter, WhatsApp } from '@mui/icons-material';
import './styles/HeaderNavbar.scss';
import logo from './images/logo.png';
import Navbar from './Navbar';

const HeaderNavbar = () => {
    return (
        <div className='header-navbar'>
            <nav className='header'>
                <div className='logo'>
                    <img src={logo} className='logo-brand' alt='logo' />
                    <p>गौ सेवा<br /> धाम</p>
                </div>

                <div className='header-menu'>
                    <div className='header-contact-menu'>
                        <Link to='*' className='header-link'>
                            <ShareLocation className='shareLocation' /> <span className='address'>587 E, Greenville Avenue<br /> California, TX 70240</span>
                        </Link>

                        <Link to='*' className='header-link'>
                            <Call className='call' /> <span className='phoneNumber'>+91 25836 42975<br />call us</span>
                        </Link>
                    </div>

                    {/* Social Menu */}
                    <ul className='social-menu'>
                        <li className='social-link'>
                            <a href='your_facebook_link_here' className='social-icons-social-media'><Facebook /></a>
                        </li>
                        <li className='social-link'>
                            <a href='your_twitter_link_here' className='social-icons-social-media'><Twitter /></a>
                        </li>

                        <li className='social-link'>
                            <a href='your_whatsapp_link_here' className='social-icons-social-media'><WhatsApp /></a>
                        </li>

                        <li className='social-link'>
                            <a href='your_telegram_link_here' className='social-icons-social-media'><Telegram /></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Navbar />
        </div>
    )
}

export default HeaderNavbar;