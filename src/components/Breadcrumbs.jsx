import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/breadcrumbs.scss';

function Breadcrumbs() {
  return (
    <div className='breadcrumbs'>
      <div className='breadcrumbs__icon-house'>
        <i className='bi bi-house-door'></i>
      </div>
      <div className='breadcrumbs__icon-chevrons'>
        <i className='bi bi-chevron-double-right'></i>
      </div>
      <div> eCommerce </div>
      <div className='breadcrumbs__icon-chevrons'>
        <i className='bi bi-chevron-double-right'></i>
      </div>
      <Link to='/'>Electronics</Link>
    </div>
  );
}

export default Breadcrumbs;
