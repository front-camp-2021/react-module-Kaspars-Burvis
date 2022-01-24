import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import { Electronics, Wish } from './containers';
import { Header, Pagination, Breadcrumbs } from './components';

function App() {
  return (
    <div className='site'>
      <Header />
      <Breadcrumbs />
      <div>
        <Routes>
          <Route path='/' element={<Electronics />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/*' element={<Electronics />} />
        </Routes>
      </div>
      <Routes>
        <Route path='/' element={<Pagination />} />
      </Routes>
    </div>
  );
}

export default App;
