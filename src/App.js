import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="site">
      <Header />
      <div className="site-body container">
        <FilterContainer />
        <ProductContainer />
      </div>
      <Pagination />
    </div>
  );
}

export default App;