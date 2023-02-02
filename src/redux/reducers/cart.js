const initialState = {
    products: []
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let isProductInCart = false;
            const productsUpdated = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    isProductInCart = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product
                }
            })

            if (!isProductInCart) {
                return {
                    ...state,
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                }
                
            } else {
                return {
                    ...state,
                    products: productsUpdated
                }
            }
            
            

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                products: [
                    ...state.products.filter(product => action.payload.product.id !== product.id)
                ]
            };
            
              
        
        default:
            return state;

            
    }
}

export default cartReducer;