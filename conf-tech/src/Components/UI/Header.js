import React from 'react';

const Header = ({titulo}) => {
    return (
        <nav className='nav-wrapper blue darken-3'>
            <a href="/" className='brand-logo center black-text'>{titulo}</a>
        </nav>
    );
}
 
export default Header;