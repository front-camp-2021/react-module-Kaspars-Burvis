import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands, setBrands } from '../redux/actions.js';
import InputCheckbox from './InputCheckbox';
import '../scss/BrandsList.scss';

function BrandsList() {
  const brands = useSelector((state) => state.brandsReducer.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const handleBrandsCheck = (e) => {
    const { name, checked } = e.target;

    dispatch(
      setBrands(
        brands.map((item) => {
          return item.brand === name ? { ...item, checked: checked } : item;
        })
      )
    );
  };

  return (
    <div className='brand'>
      <div className='brand__title title'>Brand</div>
      <div className='brand__lists'>
        {brands.map(({ brand, checked }) => (
          <div key={brand} className='brand__item'>
            <InputCheckbox
              name={brand}
              handleCheck={handleBrandsCheck}
              checked={checked}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandsList;
