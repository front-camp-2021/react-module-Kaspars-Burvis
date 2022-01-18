import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWishList } from '../redux/actions';
import '../scss/card.scss';

function Card({ card }) {
  const wishList = useSelector((state) => state.productsReducer.wishList);
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(false);

  const wishListHandle = (e) => {
    e.preventDefault();
    setActive(!active);

    const list = wishList.reduce((acc, current) => {
      return acc.concat(current.id);
    }, []);

    if (list.includes(card.id)) {
      dispatch(
        setWishList([...wishList.filter((item) => item.id !== card.id)])
      );
    } else {
      dispatch(setWishList([...wishList, card]));
    }
  };

  return (
    <article className='goods-card'>
      <div className='goods-card__img flex-center'>
        <img src={card.images[0]} alt={card.title} />
      </div>
      <div className='goods-card__rate-price goods-card__wrap'>
        <div className='goods-card__rate'>
          {card.rating} <i className='bi bi-star'></i>{' '}
        </div>
        <div className='goods-card__price'>${card.price}</div>
      </div>
      <div className='goods-card__title goods-card__wrap'>{card.title}</div>
      <div className='goods-card__category goods-card__wrap'>
        {card.category}
      </div>
      <div className='goods-card__buttons'>
        <button
          onClick={wishListHandle}
          className='goods-card__wish flex-center'>
          <i className={active ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>{' '}
          <span>WISHLIST</span>
        </button>
        <div className='goods-card__add flex-center'>
          <i className='bi bi-bag'></i> <span> ADD TO CART</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
