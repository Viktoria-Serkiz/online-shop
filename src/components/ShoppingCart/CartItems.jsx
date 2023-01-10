import { useState } from "react";
import { DecrementSvg, IncrementSvg, CrossSvg } from "./shopIcon";
import { cardItemPatch, cardRemove } from "../../store/actions/cardAction";
import { useDispatch } from "react-redux";

const CartItems = ({
  image,
  category,
  title,
  size,
  color,
  price = 0,
  count: countItem = 0,
  itemId,
}) => {
  const [count, setCount] = useState(countItem);

  const dispatch = useDispatch();

  return (
    <div className="bag-card">
      <div className="bag-card__info">
        <div className="bag-card__img">
          <img
            className="bag-card__img"
            src={image}
            alt=""
            width={68}
            height={100}
          />
        </div>
        <div className="bag-card__about">
          <span className="bag-card__about_title text">{category}</span>
          <h2 className="bag-card__about_subtitle">{title}</h2>
          <div className="bag-card__about_details">
            <span className="bag-card__about_color text">Color: {color}</span>
          </div>
          <span className="text bag-card__about_size">Size: {size}</span>
        </div>
      </div>
      <div className="bag-card__price">${price}</div>
      <div className="bag-card__quantity">
        <button
          className="bag-card__quantity_decrement btn"
          onClick={() => {
            if (count >= 2) {
              setCount(count - 1);
              dispatch(cardItemPatch({ itemId, count: count - 1 }));
            }
          }}
        >
          <DecrementSvg />
        </button>
        <span className="bag-card__quantity_score">{count}</span>
        <button
          className="bag-card__quantity_increment btn"
          onClick={() => {
            setCount(count + 1);
            dispatch(cardItemPatch({ itemId, count: count + 1 }));
          }}
        >
          <IncrementSvg />
        </button>
      </div>
      <div className="bag-card__total">
        <span className="bag-card__total_price">
          ${(count * price).toFixed(2)}
        </span>
        <button
          className="bag-card__total_delete btn"
          onClick={() => {
            dispatch(cardRemove({ itemId }));
          }}
        >
          <CrossSvg />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
