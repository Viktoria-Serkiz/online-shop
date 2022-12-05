import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import countReducer from "./reducers/countReducer";
import clothingReducer from "./reducers/clothingReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer,
    clothing: clothingReducer,
  },
});

export default store;
