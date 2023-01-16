import { createReducer } from "@reduxjs/toolkit";

const favoritesReducer = createReducer([], (builder) => {
  builder
    .addCase("FAVORITES_ADD", (store, { payload }) => {
      return store.find((item) => item.id === payload.id)
        ? [
            ...store.map((item) => {
              if (item.id === payload.id) {
                return item;
              }
            }),
          ]
        : [...store, payload];
    })
    .addCase("FAVORITES_REMOVE", (store, { payload }) => {
      const data = store.filter((item) => item.id !== payload.id);
      return data;
    });
});

export default favoritesReducer;
