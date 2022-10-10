import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>Quiz Hunter</h1>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/order' >Orders</Link>
                <Link to='/about' >About</Link>
            </nav>
        </div>
    );
};

export default Header;