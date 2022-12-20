import React from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";
import { useDispatch, useSelector } from "react-redux";
import {
  favoritesAdd,
  favoritesRemove,
} from "../store/actions/favoritesAction";

const Card = ({ value }) => {
  const { image, price, title, description, id } = value;
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites);
  const inFavorites = () => {
    const result = favorites.filter((item) => item.id === id);

    if (result.length > 0) {
      return true;
    }
    return false;
  };

  const toggleFavorites = () => {
    if (inFavorites()) {
      dispatch(favoritesRemove(value));
    } else dispatch(favoritesAdd(value));
  };

  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt="" width={255} />
      </div>
      <button
        className="card__like"
        onClick={() => {
          toggleFavorites();
        }}
      >
        <Wishlist
          className={`"card__likesvg" ${
            inFavorites() ? "card__likesvg_active" : null
          }`}
        />
      </button>
      <Link to={`/product/${id}`}>
        <span className="card__brand" title={title}>
          {title}
        </span>
      </Link>
      <p className="card__item">{description}</p>
      <p className="card__price">${price}</p>
    </div>
  );
};
export default Card;
