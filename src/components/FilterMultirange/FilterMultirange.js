import React from 'react'
import './FilterMultirange.css'

function FilterMultirange() {
  return (
    <div class="multirange">
            <div class="multirange__title title">Multi Range</div>
            <div class="multirange__item">
              <input type="radio" name="multi" id="multirange1" />
              <label for="multirange1"> $ 10 </label>
            </div>
            <div class="multirange__item">
              <input type="radio" name="multi" id="multirange2" checked />
              <label for="multirange2"> $10 - $ 100 </label>
            </div>
            <div class="multirange__item">
              <input type="radio" name="multi" id="multirange2" checked />
              <label for="multirange2"> $100 - $ 500 </label>
            </div>
            <div class="multirange__item">
              <input type="radio" name="multi" id="multirange2" checked />
              <label for="multirange2"> $500 </label>
            </div>
            <div class="multirange__item">
              <input type="radio" name="multi" id="multirange2" checked />
              <label for="multirange2"> All </label>
            </div>
    </div>
  )
}

export default FilterMultirange
