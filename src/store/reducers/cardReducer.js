import { createReducer } from "@reduxjs/toolkit";

const cardReducer = createReducer([], (builder) => {
  builder
    .addCase("CARD_ADD", (store, { payload }) => {
      return store.find(
        (item) => item.size === payload.size && item.color === payload.color
      )
        ? [
            ...store.map((item) => {
              if (item.size === payload.size && item.color === payload.color) {
                return { ...item, count: payload.count + item.count };
              } else {
                return item;
              }
            }),
          ]
        : [...store, payload];
    })
    .addCase("CARD_ITEM_PATCH", (store, { payload }) => {
      return [
        ...store.map((item) => {
          if (item.itemId === payload.itemId) {
            return { ...item, count: payload.count };
          }
          return item;
        }),
      ];
    })
    .addCase("CARD_REMOVE", (store, { payload }) => {
      const data = store.filter((item) => item.itemId !== payload.itemId);
      return data;
    })
    .addCase("CARD_REMOVE_ALL", (store, { payload }) => {
      return [];
    });
});

export default cardReducer;
