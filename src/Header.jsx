import React from 'react';
import Logo from './images/Keep_logo.png';

const Header = () => {
    return(
    <>
        <div className='header'>
            <img src={Logo} alt='logo' height='50' width='70' />
            <h1> Notes </h1>
        </div>
    </>
    );
};


export default Header;