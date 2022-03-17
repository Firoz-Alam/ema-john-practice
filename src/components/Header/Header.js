import React from 'react';
import logoIcon from '../../images/logo.png'
import './Header.css'

const Header = () => {
    
    return (
        <div className='header'>
            <img src={logoIcon} alt="" />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;