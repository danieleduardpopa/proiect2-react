import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import TermsAndConditions from './pages/TermsAndConditions';
import Register from './pages/Register';


function App() {
  
  
  
    return (
      <div>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='*' element={ <Page404 /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/terms-and-conditions' element={ <TermsAndConditions /> } />
          <Route path='/category/:categoryName' element={<Category />} />
        </Routes>
      </div>
    )
  

}

export default App;
