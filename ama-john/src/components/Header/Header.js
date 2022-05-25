import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header-main-area'>
            <div className='container'>
                <div className="header-main-text-area">
                    <div className="header-logo-area">
                        <a href="index.html"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="header-nav-main-area">
                        <ul>
                            <li><a href="/order">Order</a></li>
                            <li><a href="/orderReview">Order Review</a></li>
                            <li><a href="/manageInventory">Manage Inventory</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;