import React, { useState } from 'react';
import './styles/Navbar.scss';
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>

            <nav className="navbar">
                <ul className={`nav-links-btn ${isOpen ? 'open' : ''}`}>
                    <input type="checkbox" id="checkbox_toggle" checked={isOpen} onChange={toggleMenu} />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                    <div className="menu">
                        <li><Link to="/" className='color'>Home</Link></li>
                        <li><Link to="/about" className='color'>About Us</Link></li>
                        <li><Link to="/product" className='color'>Product</Link></li>
                        <li><Link to="/services" className='color'>Services</Link></li>
                        <li className="services">
                            <span>Campaign</span>
                            {/* DROPDOWN MENU */}
                            <ul className="dropdown">
                                <li><Link to='/productreview' className='color'>Dropdown 1</Link></li>
                                <li><Link to='/campagion1' className='color'>Medical Campagion</Link></li>
                                <li><Link to='/cart' className='color'>Dropdown 3</Link></li>
                                <li><Link to='/checkout' className='color'>Dropdown 4</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/blog" className='color'>Blogs</Link></li>
                        <li><Link to="/contact" className='color'>Contact us</Link></li>
                    </div>
                </ul>

                <div className='search-box'>
                    <input type='search' className='search-input' placeholder='Search' />
                    <button className='search-btn'><Search className='search' /></button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
