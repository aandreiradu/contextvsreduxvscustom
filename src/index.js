import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// toolkit
import store from './store/index';
import { Provider } from 'react-redux'


// context
import ProductsProvider from './context/products-context';

// v1 toolkit
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// v2 context
// ReactDOM.render(
//   <BrowserRouter>
//     <ProductsProvider>
//       <App />
//     </ProductsProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );
