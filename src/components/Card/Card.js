import React from 'react'
import './Card.css'

function Card({card}) {
  return (
    <article class="goods-card">
      <div class="goods-card__img flex-center">
        <img src={card.images[0]} alt="apple watch" />
      </div>
      <div class="goods-card__rate-price goods-card__wrap">
        <div class="goods-card__rate">{card.rating} <i class="bi bi-star"></i> </div>
        <div class="goods-card__price">${card.price}</div>
      </div>
        <div class="goods-card__title goods-card__wrap">{card.title}</div>
        <div class="goods-card__category goods-card__wrap">{card.category}</div>
        <div class="goods-card__buttons">
        <a href="/" class="goods-card__wish flex-center"><i class="bi bi-heart"></i> <span>WISHLIST</span></a>
         <a href="/" class="goods-card__add flex-center"><i class="bi bi-bag"></i> <span> ADD TO CART</span></a>
      </div>
    </article>
  )
}

export default Card
