import React from 'react';

const Header = ({titulo}) => {
    return (
        <nav className='nav-wrapper orange darken-1'>
            <a href="/" className='brand-logo center black-text'>{titulo}</a>
        </nav>
    );
}
 
export default Header;