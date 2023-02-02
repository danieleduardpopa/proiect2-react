import React from 'react';
import Layout from '../components/Layout';
import {removeFromFavorites} from '../redux/actions/favorites';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function Favorites(props) {
    const { favoriteProducts, removeFromFavorites } = props;
    console.log(props);

    return (
        <Layout>
            
            {   favoriteProducts.length !==0
                ?   <div className='container'>
                        <div className='w-50 h4 mb-4 '>
                            Produse favorite:
                        </div>
                        {
                            favoriteProducts.map((favoriteProduct, index) => {
                            return (
                                
                                <div className='row d-flex justify-content-start 
                                    mb-3 align-items-center border p-1'
                                    key={index}>
                                    <div className='col-4 h6'>
                                        {favoriteProduct.name}
                                    </div>
                                    <div className='col-4 d-flex justify-content-center'>
                                        <img src={favoriteProduct.image} 
                                            alt='favorite' 
                                            className='w-25 rounded'/>
                                    </div>
                                    <div className='col-4 d-flex align-items-center justify-content-end'>
                                        <button 
                                            className='btn btn-outline-dark '
                                            onClick={() => removeFromFavorites({
                                                product: favoriteProduct
                                            })}
                                        >
                                            REMOVE
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                :   <div className=' d-flex flex-column justify-content-center align-items-center'>
                        <p className='h4 my-3'>Nu sunt produse adaugate la favorite</p>
                        <Link to='/'>
                            <button className='btn  btn-outline-dark'>
                                ADAUGA PRODUSE
                            </button>
                        </Link>
                    </div>
            }
        </Layout>
    )
}


function mapStateToProps(state) {  
    return {
        favoriteProducts: state.favorites.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

