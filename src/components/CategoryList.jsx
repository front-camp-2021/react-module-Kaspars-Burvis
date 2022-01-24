import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, setCategories } from '../redux/actions.js';
import InputCheckbox from './InputCheckbox';
import '../scss/CategoryList.scss';

function CategoryList() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleCategoryCheck = (e) => {
    const { name, checked } = e.target;

    dispatch(
      setCategories(
        categories.map((item) => {
          return item.categories === name
            ? { ...item, checked: checked }
            : item;
        })
      )
    );
  };

  return (
    <div className='category'>
      <div className='category__title title'>Category</div>
      <div className='category__lists'>
        {categories.map(({ categories, checked }) => (
          <div key={categories} className='category__item'>
            <InputCheckbox
              name={categories}
              handleCheck={handleCategoryCheck}
              checked={checked}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
