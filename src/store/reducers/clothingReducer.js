import { createReducer } from "@reduxjs/toolkit";

const clothingReducer = createReducer({ clothing: [] }, (builder) => {
  builder
    .addCase("CLOTHING__LOADING", (store) => {
      return { ...store, loading: true };
    })
    .addCase("CLOTHING__SUCCESS", (store, action) => {
      return { ...store, ...{ loading: false, clothing: action.payload } };
    })
    .addCase("CLOTHING__ERROR", (store, action) => {
      return { ...store, ...{ loading: false, error: action.payload } };
    });
});

export default clothingReducer;
