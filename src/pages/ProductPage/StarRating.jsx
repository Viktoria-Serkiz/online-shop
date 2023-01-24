import { useState } from "react";
import { Star } from "./Star";

const StarRating = ({ rate = 3, vote = "139" }) => {
  const [value, setValue] = useState(rate);
  const [hover, setHover] = useState(rate);

  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= ((value && hover) || hover) ? "on" : "off"}
            onClick={() => setValue(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(value)}
          >
            <Star star={star} key={index}></Star>
          </button>
        );
      })}
      <p className="rating__text">
        {value} ({vote} reviews)
      </p>
    </div>
  );
};

export default StarRating;
