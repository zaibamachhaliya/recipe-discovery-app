import { configureStore, createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        selectedCategory: 'Dessert',
        favorites: [],
        cetegoriItems: [],
        recepeDetail:{},
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },

        setCetegory: (state, action) => {

            state.selectedCategory = action.payload;
        },

        addToFavorites: (state, action) => {

            const exites = state.favorites.some(
                (favrate) => favrate.idMeal == action.payload.item.idMeal
            );

            if (!exites) {
                state.favorites.push({
                    ...action.payload.item,
                    price: action.payload.price,
                    ratingresult: action.payload.ratingresult,
                });
            }
        },

        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((item) => item.idMeal !== action.payload);

        },

        setCetegoryItems: (state, action) => {
            state.cetegoriItems = action.payload;

        },

        setRecipeDetail:(state,action)=>{
            state.recepeDetail=action.payload;
        }

    }
})


export const { setProducts, setCetegory, addToFavorites, removeFromFavorites,setCetegoryItems,setRecipeDetail } = productSlice.actions;


const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    }
});

export default store;