import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import productcart1 from './images/cheese.jpeg';
import './styles/Cart.scss';

const Cart = () => {
    const [quantity, setQuantity] = useState(1); // Adjust the initial quantity here

    const handleQuantityChange = (change) => {
        setQuantity(quantity + change);
    };

    return (
        <div>
            <div className='cart-banner'>
                <h1>Product</h1>
                <p>
                    <Link to='/' className='goback-home'>Home</Link> {'>'}{' '}
                    <Link to=''>Product</Link> {'>'} <Link to=''>Cart</Link>
                </p>
            </div>

            <div className='cart-product-list-table'>
                <table>
                        <tr>
                            <th>Preview</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td><img src={productcart1} alt='img' /></td>
                            <td>Cheese</td>
                            <td>$22</td>
                            <td>
                                <button onClick={() => handleQuantityChange(-1)} className='decrease-quantity'>-</button>
                                <span className='quantity-number'>{quantity}</span>
                                <button onClick={() => handleQuantityChange(1)} className='increase-quantity'>+</button>
                            </td>
                            <td>${22 * quantity}</td>
                            <td><button className='btn-delete'><Delete className='delete-icon' /></button></td>
                        </tr>
                </table>
            </div>

            <div className='cart-tool'>
                <table border={'2px'}>
                    <tr>
                        <th colSpan={'2'}>Cart Total</th>
                    </tr>

                    <tr>
                        <td>Cheese</td>
                        <td>$22</td>
                    </tr>
                    
                    <tr>
                        <td>Total</td>
                        <td>${22 * quantity}</td>
                    </tr>

                    <tr className='check-out-btn-row'>
                        <td colSpan={'2'}>
                            <button className='check-out'>Proceed to Checkout</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Cart;
