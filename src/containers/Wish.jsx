import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

function Wish() {
  const productsLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );
  const wishList = useSelector((state) => state.productsReducer.wishList);

  return (
    <div className='products'>
      {productsLoading === false ? (
        wishList.map((card) => <Card card={card} key={card.id} />)
      ) : (
        <div>Data not load</div>
      )}
    </div>
  );
}

export default Wish;
