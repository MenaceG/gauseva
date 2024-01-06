import React, { useState } from 'react';
import './styles/Checkout.scss';

const Checkout = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [optionalAddress, setOptionalAddress] = useState('');
    const [townCity, setTownCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleOptionalAddressChange = (e) => {
        setOptionalAddress(e.target.value);
    };

    const handleTownCityChange = (e) => {
        setTownCity(e.target.value);
    };

    const handlepostalCodeChange = (e) => {
        setPostalCode(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with form data here (e.g., submit to server)
        console.log('Form submitted:', {
            firstName,
            lastName,
            address,
            optionalAddress,
            townCity,
            postalCode,
        });
        // You can add further logic for handling the form data (e.g., submission to a server)
    };

    return (
        <div className='checkout'>
            <form onSubmit={handleSubmit} className='customer-full-info-contact'>
                <table>
                    <tr>
                        <td>
                            <label form='firstName'>First Name</label><br />
                            <input
                                type='text'
                                className='first-name'
                                placeholder='First Name'
                                value={firstName}
                                onChange={handleFirstNameChange}
                                required
                            />
                        </td>

                        <td>
                            <label form='LastName'>Last Name</label><br />
                            <input
                                type='text'
                                className='last-name'
                                placeholder='Last Name'
                                value={lastName}
                                onChange={handleLastNameChange}
                                required
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan='2'>
                            <label>Address</label><br />
                            <input
                                type='text'
                                className='address'
                                placeholder='Street Address'
                                value={address}
                                onChange={handleAddressChange}
                                required />
                            <br />
                            <input
                                type='text'
                                className='address'
                                placeholder='Apartment, Suite unit, etc. (optional)'
                                value={optionalAddress}
                                onChange={handleOptionalAddressChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Town / City</label><br />
                            <input
                                type='text'
                                className='town-city-address'
                                placeholder='Town/City'
                                value={townCity}
                                onChange={handleTownCityChange}
                                required
                            />
                        </td>
                        <td>
                            <label>Postcode / Zip</label><br />
                            <input
                                type='number'
                                className='postal-zip-code'
                                placeholder='Postal/Zip Code'
                                value={postalCode}
                                onChange={handlepostalCodeChange}
                                required
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Email Address</label><br />
                            <input
                                type='email'
                                className='email-address'
                                placeholder='Email'
                                value={postalCode}
                                onChange={handlepostalCodeChange}
                                required
                            />
                        </td>

                        <td>
                            <label>Phone</label><br />
                            <input
                                type='tel'
                                className='phone-number'
                                placeholder='Phone Number'
                                value={townCity}
                                onChange={handleTownCityChange}
                                required
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan='2'>
                            <button className='info-sumbit' type='submit'>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>

            <div className='get-way-payment'>
                <table border='2px'>
                    <tr>
                        <th>Product</th>
                        <th>Total</th>
                    </tr>

                    <tr>
                        <td>ELECTRIC HUMMER X 1</td>
                        <td>$65.00</td>
                    </tr>

                    <tr>
                        <td>SUBTOTAL</td>
                        <td>$65.00</td>
                    </tr>

                    <tr>
                        <td>SHIPPING AND HANDLING</td>
                        <td>Free Shipping</td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td>$65.00</td>
                    </tr>

                    <tr>
                        <td colSpan={2}><button className='place-order-buyit'><strong>Order Place</strong></button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Checkout;
