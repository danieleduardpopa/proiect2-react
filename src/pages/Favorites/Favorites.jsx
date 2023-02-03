import React from 'react';
import Layout from '../../components/Layout/Layout';
import {removeFromFavorites} from '../../redux/actions/favorites';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function Favorites(props) {
    const { favoriteProducts, removeFromFavorites } = props;
    console.log(props);

    return (
        <Layout>
            <div className='container container-min-max-width'>
            {   favoriteProducts.length !==0
                ?   <div className='container container-min-max-width'>
                        <div className=' h4 mb-4 '>
                            Produse favorite:
                        </div>
                        {
                            favoriteProducts.map((favoriteProduct, index) => {
                            return (
                                
                                <div className='row d-flex justify-content-start 
                                    align-items-center border rounded p-1 m-1'
                                    key={index}>
                                    <div className='col-4 h6'>
                                        {favoriteProduct.name}
                                    </div>
                                    <div className='col-4 d-flex justify-content-center'>
                                        <img src={favoriteProduct.image} 
                                            alt='favorite' 
                                            className='h-25 w-25 rounded'/>
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
                :   <div className='container text-center'>
                        <p className='h4'>Nu sunt produse adaugate la favorite</p>
                        <Link to='/'>
                            <button className='btn  btn-outline-dark'>
                                ADAUGA PRODUSE
                            </button>
                        </Link>
                    </div>
            }
            </div>
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

