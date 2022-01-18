import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/actions';
import '../scss/pagination.scss';

function Pagination() {
  const totalCards = useSelector((state) => state.productsReducer.totalCards);
  const currentPage = useSelector((state) => state.productsReducer.currentPage);
  const cardsPerPage = useSelector(
    (state) => state.productsReducer.cardsPerPage
  );
  const dispatch = useDispatch();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pages flex-center'>
      <div className='pages__arrow'>
        <i className='bi bi-chevron-double-left'></i>
      </div>
      <div className='pages__list flex-center'>
        {pageNumbers.map((number, index) => {
          return (
            <div
              key={index}
              className={
                currentPage === number ? 'pages__item-active' : 'pages__item'
              }
              onClick={(e) => {
                e.preventDefault();
                dispatch(setCurrentPage(number));
              }}>
              {number}
            </div>
          );
        })}
      </div>
      <div className='pages__arrow'>
        <i className='bi bi-chevron-double-right'></i>
      </div>
    </div>
  );
}

export default Pagination;
