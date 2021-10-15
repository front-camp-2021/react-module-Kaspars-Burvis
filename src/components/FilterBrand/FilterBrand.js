import React from 'react'
import "./FilterBrand.css"
import { useSelector } from 'react-redux'


function FilterBrand() {
  const brands = useSelector(state => state.brands)

  const brandList = brands.map(brand => (
  <div class="brand__check-item">
    <input type="checkbox" name="brnd" id="brand1" />
    <label for="brand1">{brand} </label>
  </div>
));

  return (
    <div class="brand">
    <div class="brand__title title">Brand</div>
    <div class="brand__lists">
      <div class="brand__list-check">{brandList}</div>
    </div>
  </div>
  )
}

export default FilterBrand