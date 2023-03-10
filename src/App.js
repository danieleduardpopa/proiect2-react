import React from 'react';
import './utils/utility-classes.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Page404 from './pages/Page404/Page404';
import Category from './pages/Category/Category';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import Product from './pages/Product/Product';


function App() {
  
    return (
      <div>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/favorites' element={ <Favorites /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/terms-and-conditions' element={ <TermsAndConditions /> } />
          <Route path='/category/:categoryName' element={ <Category />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:productId' element={ <Product /> } />
          <Route path='*' element={ <Page404 /> } />
        </Routes>
      </div>
    )
  

}



export default App;