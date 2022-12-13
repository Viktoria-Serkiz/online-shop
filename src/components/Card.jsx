import React from "react";
import Like from "../img/like.svg";
import { useState } from "react";

const Card = ({ image, price, title }) => {
  // const [likeHeart, setlikeHeart] = useState();
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt="" width={255} />
      </div>
      <button className="card__like">
        <img src={Like} alt="" width="16" height="14" />
      </button>
      <p className="card__brand">{title}</p>
      <p className="card__price">${price}</p>
    </div>
  );
};
export default Card;
