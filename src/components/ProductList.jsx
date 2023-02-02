import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
  const {products} = props;
  
  return (
    <div className='container'>
      <div className='row mb-4'>

        {
          products
            ?  products.map((product) => {
                return(
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    currency={product.currency}
                    image={product.image}
                  />
                )
              })
            : null
        }
      </div>
    </div>
  )
}

export default ProductList
