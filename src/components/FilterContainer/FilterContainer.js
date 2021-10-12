import React from "react";
import FilterBrand from "../FilterBrand/FilterBrand";
import FilterCategory from "../FilterCategory/FilterCategory";
import FilterMultirange from "../FilterMultirange/FilterMultirange";
import './FilterContainer.css';

function FilterContainer() {
  return (
    <aside class="filters">
        <div class="filters__title-block">
          <div class="filters__title">Filter</div>
          <a href ='/' class="filters__link"><i class="bi bi-chevron-double-left"></i></a>
        </div>
        <div class="filters__list">
         <FilterMultirange />
         <FilterCategory />
         <FilterBrand />
        </div>
        <div class="filters__btn flex-center"><a href="/" class="">CLEAR ALL FILTERS</a></div>
      </aside>
  );
}

export default FilterContainer;