import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faquiz } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            {/* <FontAwesomeIcon icon={faquiz}></FontAwesomeIcon> */}
            <h1 >  Quiz Hunter</h1>
            <nav>
                <Link to='/' >Home</Link>
            </nav>
        </div>
    );
};

export default Header;