import React from 'react'
import './FilterCategory.css'
import { useSelector } from 'react-redux'

function FilterCategory() {

  const categories = useSelector(state => state.categories)
  
  const categoryList = categories.map(item => (
  <div className="category__check-item">
    <input type="checkbox" name="categor" id="category1" />
    <label for="category1">{item}</label>
  </div>
  ))

  return (
    <div className="category">
            <div className="category__title title">Category</div>
            <div className="category__lists">
              <div className="category__list-check">{categoryList}</div>
            </div>
          </div>
  )
}

export default FilterCategory
