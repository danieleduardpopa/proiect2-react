import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/UserActions';
import  heart  from '../../assets/icons/heart-empty.svg';
import heartFull from '../../assets/icons/heart.svg';


function Header(props) {
    const {numberOfProducts, isFavorite, user, logout} = props;
    const isFavoriteIn = isFavorite > 0;

    return (
        <header  className="border-bottom mb-3">
            <div className='header d-flex justify-content-between 
                            align-items-center container container-min-max-width'>
                <Link to='/' className="my-3"> 
                    <img src={logo} alt='logo' />
                </Link>
                <div className='d-flex '>
                    <Link to='/favorites' className='container align-items-end d-flex'>
                        {
                            isFavoriteIn
                                ? <div className='favorites p-2'>
                                    <img src={heartFull}  alt='logoheart' className='' />
                                    </div>

                                : <div className='favorites p-2' >
                                    <img src={heart}  alt='logoheart'/>
                                    </div>
                        }
                    </Link>
                    <div className='w-100 ml-5'>
                        { user
                            && <p className='text-center'>Salut, {user.displayName}</p>
                        }
                        <div className='d-flex justify-content-end'>
                            { user
                                ? <p className='logout h5' onClick={logout}>Delogare</p>
                                : <Link to='/login' className='h5'>Login</Link>
                            }
                            <div className="d-flex align-items-center">
                                <Link to='/cart'>
                                    <ShoppingCart />
                                </Link>
                                <p className="m-1">{numberOfProducts}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data,
        isFavorite: state.favorites.products.length
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


