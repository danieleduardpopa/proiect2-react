import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favorites';
import { Link } from 'react-router-dom';

import fullHeart from '../assets/icons/heart.svg';
import heart from '../assets/icons/heart-empty.svg';

function ProductItem(props) {
    const {
      id, 
      name, 
      price, 
      currency, 
      image, 
      addToCartInjected, 
      addToFavorites, 
      removeFromFavorites,
      favoriteProducts
    } = props;
      
      const favoriteProduct = favoriteProducts.filter((prod) => prod.id === id);
      const isFavorite = favoriteProduct.length > 0;

      return (
        <div className='product-item col-4 d-flex flex-column align-items-center mb-2 '>
          <Link 
            to={`/product/${id}`} 
            className='d-flex flex-column align-items-center'
          >
            <img src={image} alt='product' className='mt-2 '/>
            <p className='flex-fill w-75 text-center'>{name}</p>
            <p>{price} {currency}</p>
          </Link>
          <button 
            className='btn btn-outline-dark mb-1'
            onClick={() => {
              addToCartInjected({
                product: {
                  id,
                  name,
                  price,
                  currency,
                  image
                } 
              })
            }}
          >
            Adauga in cos
          </button>
          <div>
            {
              !isFavorite
                ? <img 
                    src={heart} 
                    alt='heart-empty'
                    style={{height: 30, width: 28}} 
                    onClick={() => 
                      addToFavorites({
                        product: {
                          id,
                          name,
                          image
                        }
                      })
                    } 
                  />
                : <img 
                    src={fullHeart}
                    alt='full-heart' 
                    style={{height: 30, width: 28}} 
                    onClick={() => 
                      removeFromFavorites({
                        product: {
                          id
                        }
                      })
                    }
                  />
            }
          </div>
        </div>
      )
}

function mapDispatchToProps(dispatch) {
    return {
      addToCartInjected: (payload) => dispatch(addToCart(payload)),
      addToFavorites: (payload) => dispatch(addToFavorites(payload)),
      removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)) 
    }
}

function mapStateToProps(state) {
  return {
    favoriteProducts: state.favorites.products
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
