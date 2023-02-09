import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./FavoritesConstants";

const initialState = {
    products: []
}

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload.product
                ]
            }

        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                products: [
                    ...state.products.filter(product => 
                        action.payload.product.id !== product.id)
                ]
            }

        default:
            return state;
    }
}