import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'; 

const Header = () => {
    return (
        <div className='main_header'>
            <div className='container'>
                <div className='main_header_area'>
                    <div className='logo_area'>
                        <a href="./index.html"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className='menu_area'>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/details">Details</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;