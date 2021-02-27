import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <h4 style={{float: 'left',color: 'white',margin:'10px'}}>社交媒体</h4>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/friends">Friends</a>
            </nav>
        </div>
    );
};

export default Header;