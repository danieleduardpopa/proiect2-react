import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/FavoritesActions';
import fullHeart from '../../assets/icons/heart.svg';
import heart from '../../assets/icons/heart-empty.svg';

function Product(props) {
    const {productId} = useParams();
    const [ prodItem, setProdItem ] = useState({});
    const isFavorite = props.favoriteProducts.find(prod => prod.id === prodItem.id);
    
    console.log(prodItem);

    useEffect(() => {
        const categoryValues = Object.values(products);
        let currentProd;
        categoryValues.forEach((category) => {
            
            const findResult = category.items.find((item) => {
                return Number(productId) === item.id;
            })

            if (findResult) {
                currentProd = findResult;
            }
        })
        setProdItem(currentProd);
    }, [productId])

    return (
        <Layout>
            <div className="container container-min-max-width mb-3 mr-2">
                <div className='h3'>
                    {prodItem.name}
                </div>
                <div className='row '>
                    <div className='col-md-4 col-6 mb-2'>
                        <img src={prodItem.image} alt='produs' className='rounded w-75' />
                    </div>
                    <div className='col-md-3 col-12 border rounded  h6'>
                        <p>Brand: {prodItem.brand}</p>
                        <p className=''>Culoare: {prodItem.colour}</p>
                        <p>Marime: {prodItem.size}</p>
                        <p>Material: {prodItem.material}</p>
                        <p>Descriere: {prodItem.description}</p>
                    </div>
                    <div className='col-md-3 col-6 d-flex rounded flex-column my-auto mx-2 p-1 bg-light'>
                        <p className='border rounded text-center'>Pret: {prodItem.price} {prodItem.currency}</p>
                        <button className='strong btn btn-dark mb-2'
                            onClick={() => props.addToCart({
                                product: {...prodItem}
                            })}
                        >
                            Adauga in Cos
                        </button>
                        
                        {
                            !isFavorite
                                ? <div className='fav-item d-flex'>
                                    <img
                                    className='m-auto' 
                                    src={heart} 
                                    alt='heart-empty'
                                    onClick={() => 
                                        props.addToFavorites({
                                        product: {
                                            id: prodItem.id,
                                            name: prodItem.name,
                                            image: prodItem.image
                                        }
                                        })
                                    } 
                                    />
                                </div>
                                : <div className='fav-item d-flex flex-column justify-content-center align-item-center'>
                                    <img
                                    className='m-auto' 
                                    src={fullHeart}
                                    alt='full-heart' 
                                    onClick={() => 
                                        props.removeFromFavorites({
                                        product: {
                                            id: prodItem.id
                                        }
                                        })
                                    }
                                    />
                                </div>
                            }
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

function mapStateToProps(state) {
    return {
        favoriteProducts: state.favorites.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

