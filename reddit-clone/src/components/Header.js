import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>

            <div className='header-left'>
                <img src="/logo192.png" alt="logo" className='header-logo-img' />
                <h1 className='header-title'>Reddit Clone</h1>
            </div>

            <div className='header-center'>
                <input type="text" placeholder='Search posts...' />
            </div>


        </header>
    );
}

export default Header;