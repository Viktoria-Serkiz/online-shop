import { createAction } from "@reduxjs/toolkit";

// function userSignUp(userName) {
//   return {
//     type: "USER__SIGNUP",
//     payload: { userName },
//   };
// }

const userSignUp = createAction("USER__SIGNUP");

export { userSignUp };
