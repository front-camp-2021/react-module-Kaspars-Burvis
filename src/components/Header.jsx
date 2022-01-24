import React from 'react';

import '../scss/header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src='./logo.png' alt='logo' />
      </div>
      <h1 className='header__title'>Online Store</h1>
    </header>
  );
}

export default Header;
