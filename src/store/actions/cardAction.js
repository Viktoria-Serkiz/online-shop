import { createAction } from "@reduxjs/toolkit";

const cardAdd = createAction("CARD_ADD");
const cardItemPatch = createAction("CARD_ITEM_PATCH");
const cardRemove = createAction("CARD_REMOVE");
const cardRemoveAll = createAction("CARD_REMOVE_ALL");

export { cardAdd, cardItemPatch, cardRemoveAll, cardRemove };
