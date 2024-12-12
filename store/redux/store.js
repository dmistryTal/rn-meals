import {configureStore} from '@reduxjs/toolkit';
import favoriteSliceReducer from './favorite';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteSliceReducer,
    },
});