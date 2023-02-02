import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import products from '../utils/products.json';

function Product(props) {
    const {productId} = useParams();
    const [ prodItem, setProdItem ] = useState({});
    
    console.log({prodItem});
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
            <div className="container-fluid container-min-max-width mb-3">
                <div className='h3'>
                    {prodItem.name}
                </div>
                <div className='row justify-content-between'>
                    <div className='col-md-4 col-6'>
                        <img src={prodItem.image} alt='produs' className='rounded w-75' />
                    </div>
                    <div className='col-md-3 col-12 border rounded  my-auto mx-1 h6'>
                        <p>Brand: {prodItem.brand}</p>
                        <p className=''>Culoare: {prodItem.colour}</p>
                        <p>Marime: {prodItem.size}</p>
                        <p>Material: {prodItem.material}</p>
                        <p>Descriere: {prodItem.description}</p>
                    </div>
                    <div className='col-md-3 col-6 d-flex rounded flex-column my-auto mx-2 p-2 bg-light'>
                        <p className='border rounded text-center'>Pret: {prodItem.price} {prodItem.currency}</p>
                        <button className='strong btn btn-dark'
                            onClick={() => props.addToCart({
                                product: {...prodItem}
                            })}
                        >
                            Adauga in Cos
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product);

