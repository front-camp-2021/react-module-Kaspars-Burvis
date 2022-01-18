import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../scss/mainBlock.scss';
import {
  getProducts,
  setSearchProduct,
  setTotalCards,
  setCurrentPage,
} from '../redux/actions';
import Card from '../components/Card';

function MainBlock() {
  const products = useSelector((state) => state.productsReducer.products);
  const productsLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );
  const searchProducts = useSelector(
    (state) => state.productsReducer.searchProducts
  );
  const totalCards = useSelector((state) => state.productsReducer.totalCards);
  const cardsPerPage = useSelector(
    (state) => state.productsReducer.cardsPerPage
  );
  const currentPage = useSelector((state) => state.productsReducer.currentPage);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const brands = useSelector((state) => state.brandsReducer.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  function filteringProducts(products, categories, brands, searchProducts) {
    products.forEach((el, index, arr) => {
      arr[index].category = el.category.replace('_', ' ');
      arr[index].brand = el.brand.replace('-', '');
    });

    const checkedCategory = categories.filter((item) => item.checked);
    const filteringCategory = checkedCategory.reduce((acc, item) => {
      acc.push(item.categories.toLowerCase());
      return acc;
    }, []);

    if (checkedCategory.length) {
      products = products.filter((item) =>
        filteringCategory.includes(item.category)
      );
    }

    const checkedBrands = brands.filter((item) => item.checked);
    const filteringBrands = checkedBrands.reduce((acc, item) => {
      acc.push(item.brand.toLowerCase());
      return acc;
    }, []);

    if (checkedBrands.length) {
      products = products.filter((item) =>
        filteringBrands.includes(item.brand)
      );
    }
    if (searchProducts.length) {
      products = products.filter((i) =>
        i.title.toLowerCase().includes(searchProducts.toLowerCase())
      );
    }
    return products;
  }
  const showSearchProducts = filteringProducts(
    products,
    categories,
    brands,
    searchProducts
  );

  useEffect(() => {
    dispatch(setTotalCards(showSearchProducts.length));
  }, [searchProducts, brands, categories]);

  let searchHandle = (e) => {
    e.preventDefault();
    dispatch(setSearchProduct(e.target.value));
    dispatch(setCurrentPage(1));
  };

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const productsPerPage = showSearchProducts.slice(firstIndex, lastIndex);

  return (
    <section className='main'>
      <div className='like-rating-wrapp'>
        <div className='like-rating-result'>{totalCards} results found</div>
        <Link to='/wish' className='like-rating-btn'>
          <i className='bi bi-heart'></i>
          <span>WISHLIST</span>
        </Link>
      </div>
      <div className='search-block'>
        <form action='/' className='search-form'>
          <input
            type='text'
            value={searchProducts}
            onChange={searchHandle}
            className='search-form__field'
            placeholder='Search'
          />
          <div className='search-form__button'>
            <i className='bi bi-search'></i>
          </div>
        </form>
      </div>
      <div className='products'>
        {productsLoading === false ? (
          productsPerPage.map((card) => (
            <Card card={card} key={card.id} />
          ))
        ) : (
          <div>Data not loading</div>
        )}
      </div>
    </section>
  );
}

export default MainBlock;
