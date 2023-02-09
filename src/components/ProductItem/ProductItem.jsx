import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/FavoritesActions';
import { Link } from 'react-router-dom';

import fullHeart from '../../assets/icons/heart.svg';
import heart from '../../assets/icons/heart-empty.svg';

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
      <div className='product-item 
        border rounded col-12 col-md-3 align-items-center m-1 p-2 '>
        <Link 
          to={`/product/${id}`} 
          className='d-flex flex-column align-items-center'
        >
          <img src={image} alt='product' className='mt-1 mw-100'/>
          <p className='flex-fill  text-center'>{name}</p>
        </Link>
        <div className='d-flex justify-content-center flex-column text-center  mb-1'>
          <p>{price} {currency}</p>
          <button 
            className='btn btn-outline-dark'
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
        </div>
        <div className=' d-flex justify-content-center'>
          {
            !isFavorite
              ? <div className='fav-item'>
                  <img 
                    src={heart} 
                    alt='heart-empty'
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
              </div>
              : <div className='fav-item'>
                  <img 
                    src={fullHeart}
                    alt='full-heart' 
                    onClick={() => 
                      removeFromFavorites({
                        product: {
                          id
                        }
                      })
                    }
                  />
              </div>
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
