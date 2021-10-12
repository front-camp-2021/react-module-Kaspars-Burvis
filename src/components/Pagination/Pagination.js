import React from "react";
import './Pagination.css';

function Pagination() {
  return (
    <footer class="footer">
    <div class="page flex-center">

      <div class="page__arrow">
        <a class="page__link" href="/" aria-label="Previous">
        <i class="bi bi-chevron-double-left"></i>
        </a>
      </div>
      <div class="page__list flex-center">
        <div class="page__item ">
          <a class="page__link" href="/">1</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">2</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">3</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">4</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">5</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">6</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">7</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">8</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">9</a>
        </div>
        <div class="page__item">
          <a class="page__link" href="/">10</a>
        </div>
      </div>
      <div class="page__arrow">
        <a class="page__link" href="/" aria-label="Next">
        <i class="bi bi-chevron-double-right"></i>
        </a>
      </div>

    </div>
  </footer>
  );
}

export default Pagination;