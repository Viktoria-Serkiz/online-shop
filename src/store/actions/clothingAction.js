import { createAction } from "@reduxjs/toolkit";

const clothingLoading = createAction("CLOTHING__LOADING");
const clothingSuccess = createAction("CLOTHING__SUCCESS");
const clothingError = createAction("CLOTHING__ERROR");

export { clothingLoading, clothingSuccess, clothingError };
