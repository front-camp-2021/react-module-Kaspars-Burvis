import React from "react";
import CardList from "../CardList/CardList";
import './ProductContainer.css';

function ProductContainer() {
  return (
    <section class="main">
      <div class="like-rating-wrapp">
        <div class="like-rating-result">7,618 results found</div>
        <a href="/" class="like-rating-btn"><i class="bi bi-heart"></i></a>
      </div>
      <div class="search-block">
        <form action="/" class="search-form">
          <input type="search" class="search-form__field" placeholder="Search" />
          <button class="search-form__button" type="submit" aria-label="Search"><i class="bi bi-search"></i> </button>
        </form>
      </div>
      <CardList />
    </section>
  );
}

export default ProductContainer;