import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {/* <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a> */}
            </div>
        </nav>
    
    );
};

export default Header;