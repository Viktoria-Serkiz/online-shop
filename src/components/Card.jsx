import React from "react";
import { Link } from "react-router-dom";
import { Wishlist } from "./icons";
import useInFavorites from "../hooks/useInFavorites";

const Card = ({ value }) => {
  const { image, price, title, description, id } = value;
  const { inFavorites, toggleFavorites } = useInFavorites(id, value);

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
          className={`card__likesvg ${
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
