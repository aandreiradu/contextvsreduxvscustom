import React, { Fragment } from 'react'
import Navigation from "./components/Nav/Navigation";
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Counter from './pages/Counter';

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Counter />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
