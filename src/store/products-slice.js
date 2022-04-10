import { createSlice } from "@reduxjs/toolkit";


const productsInitialState = {
    products: [
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]
}


const productsSlice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {
        toggleFav(state, action) {
            const productId = action.payload;

            const findProductById = state.products.findIndex((product) => product.id === productId);
            state.products[findProductById].isFavorite = !state.products[findProductById].isFavorite
        }
    }
});



export const productsActions = productsSlice.actions;
export default productsSlice;

