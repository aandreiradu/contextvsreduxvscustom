import React, { Fragment } from 'react'
import Navigation from "./components/Nav/Navigation";
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
