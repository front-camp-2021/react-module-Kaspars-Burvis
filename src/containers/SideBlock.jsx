import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryList, BrandsList } from '../components';
import { setCategories, setBrands } from '../redux/actions.js';
import '../scss/sideBlock.scss';

function SideBlock() {
  const brands = useSelector((state) => state.brandsReducer.brands);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  const handleClearFilters = (e) => {
    e.preventDefault();
    dispatch(
      setCategories(
        categories.map((item) => {
          return { ...item, ...{ checked: false } };
        })
      )
    );
    dispatch(
      setBrands(
        brands.map((item) => {
          return { ...item, ...{ checked: false } };
        })
      )
    );
  };
  return (
    <aside className='filters'>
      <div className='filters__title-row'>
        <div className='filters__title'>Filter</div>
        <a href='/' className='filters__link'>
          <i className='bi bi-chevron-double-left'></i>
        </a>
      </div>
      <div className='filters__block'>
        <CategoryList />
        <BrandsList />
      </div>
      <div className='filters__btn flex-center' onClick={handleClearFilters}>
        CLEAR ALL FILTERS
      </div>
    </aside>
  );
}

export default SideBlock;
