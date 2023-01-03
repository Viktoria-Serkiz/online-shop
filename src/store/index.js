import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./reducers/clothingReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import cardReducer from "./reducers/cardReducer";

const store = configureStore({
  reducer: {
    clothing: clothingReducer,
    favorites: favoritesReducer,
    card: cardReducer,
  },
});

export default store;
