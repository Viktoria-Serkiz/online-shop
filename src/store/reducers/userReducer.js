import { createReducer } from "@reduxjs/toolkit";

// function userReducer(store = {}, action) {
//   switch (action.type) {
//     case "USER__SIGNUP": {
//       return store.concat(action.payload);
//     }
//     case "USER__DELETED": {
//       return { ...store, ...action.payload };
//     }
//     default:
//       return store;
//   }
// }

const defaultUserReducer = {
  userName: "test",
};

const userReducer = createReducer(defaultUserReducer, (builder) => {
  builder
    .addCase("USER__SIGNUP", (store, action) => {
      return { ...store, ...action.payload };
    })
    .addCase("USER__DELETED", (store, action) => {
      return { ...store, ...action.payload };
    });
});

export default userReducer;
