import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Логотип" className="header__image" />
        </header>
    );
}

export default Header;