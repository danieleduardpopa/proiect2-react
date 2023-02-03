import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { removeFromCart } from '../../redux/actions/cart';
import './Cart.css';
import {ReactComponent as Close} from '../../assets/icons/close.svg';



function Cart(props) {
    const {cartProducts, removeFromCartInjected} = props;
    const totalSum = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.quantity * product.price;
        }, 0)
    }
       
    return (
        <Layout>
            <div id="cart" className='cart container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center'>
                {   
                    (cartProducts.length !== 0)
                        ?   <div className='w-100'>
                                <div className='d-flex justify-content-between text-center h4 text-bold'>
                                    <p className="w-25">Produs</p>
                                    <p className="w-25">Pret</p>
                                    <p className="w-25">Cantitate</p>
                                    <p className="w-25">Total</p>
                                </div>
                                {   cartProducts.map((cartProduct) => {
                                        return(
                                            <div key={cartProduct.id} 
                                                className='d-flex 
                                                    justify-content-between 
                                                    align-items-center text-center'
                                            >
                                                <div 
                                                    className='d-flex w-25
                                                        flex-column 
                                                        justify-content-center 
                                                        align-items-center'>
                                                    <img src={cartProduct.image}
                                                        alt='' 
                                                        className='w-auto m-auto' />
                                                    <p>{cartProduct.name}</p>
                                                </div>
                                                <p className='w-25'>
                                                    { cartProduct.price  } { cartProduct.currency }
                                                </p>
                                                <p className='w-25'>{cartProduct.quantity}</p>    
                                                <div className="w-25 d-flex justify-content-center">
                                                    <p className="mr-2">
                                                        {cartProduct.price * cartProduct.quantity} 
                                                        {cartProduct.currency} 
                                                    </p>
                                                    <div onClick={() => {
                                                            removeFromCartInjected({
                                                                product: {
                                                                    id: cartProduct.id
                                                                }
                                                            })
                                                        }}>
                                                        <Close />
                                                    </div>    
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="d-flex justify-content-end border-top">
                                    <div className="w-25 d-flex align-items-center justify-content-center">
                                        <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                                    </div>
                                    <div className="w-25">
                                        <p className="my-4 text-center">
                                            { totalSum(cartProducts) } { cartProducts[0].currency }
                                        </p>
                                    </div>
                                </div>   
                            </div>
                        
                        :   <div className='d-flex flex-column align-items-center'>
                                <p>NU AI PRODUSE IN COS</p>
                                <Link to='/' >
                                    <button className='btn btn-outline-dark'>
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
        cartProducts: state.cart.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCartInjected: (payload) => dispatch(removeFromCart(payload)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
