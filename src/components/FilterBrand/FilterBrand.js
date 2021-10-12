import React from 'react'
import "./FilterBrand.css"

const brands = [
  "Asus",
  "Acer",
  "Apple",
  "Dell",
  "Dynamode",
  "Gigabyte",
  "Kingston",
  "Lenovo",
  "Logitech",
  "MSI",
  "BenQ",
  "A4Tech"
]

function FilterBrand() {

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