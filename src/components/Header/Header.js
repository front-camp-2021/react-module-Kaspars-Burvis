import React from "react";
import './header.css';

function Header() {
  return (
      <header className="container">
      <div className="header">
        <div className="header__logo"> <img src="./logo.png" alt="logo" /> </div>
        <h1 className="header__title">Online Store</h1>
      </div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__icon-house"><i className="bi bi-house-door"></i></div>
        <div className="breadcrumbs__icon-chevrons"><i className="bi bi-chevron-double-right"></i></div>
        <a href="/" > eCommerce </a>
        <div className="breadcrumbs__icon-chevrons"><i className="bi bi-chevron-double-right"></i></div>
        <a href="/" >Electronics</a>
      </div>
    </header>
  );
}

export default Header;