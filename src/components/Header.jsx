import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';

function Header() {
    return (
        <header  className="border-bottom mb-3">
        <div className='header d-flex justify-content-between align-items-center container-fluid'>
            <Link to='/' className="my-3"> 
                <img src={logo} alt='logo' />
            </Link>
            <div>
                <Link to='/login' className='h5'> Login </Link>
                <ShoppingCart />
            </div>

        </div>
        </header>
    )
}

export default Header
