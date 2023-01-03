import { useState } from "react";

const IconDown = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
  >
    <path
      stroke="#32313A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m15 7.5-5 5-5-5"
    />
  </svg>
); 

function SizeOption({ selection, setSelection }) {
  const sizes = [34, 36, 38, 40, 42];
  const [hidden, setHidden] = useState(true);

  return (
    <ul
      className="selectsize"
      onClick={() => {
        if (!hidden) {
          setHidden(true);
        } else setHidden(false);
      }}
    >
      <li
        className={`selectsize__option ${
          hidden ? "selectsize__option_show" : "selectsize__option_hidden"
        }`}
      >
        Size {selection}
        <ul
          className={`${
            hidden ? "selectsize__size_hidden" : "selectsize__size"
          }`}
        >
          {sizes.map((value) => {
            return (
              <li
                className="selectsize__size-element btn"
                onClick={() => {
                  setSelection(value);
                  setHidden(true);
                }}
                key={`size_${value}`}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </li>
      <button
        className="selectsize__button btn"
        onClick={() => (hidden ? setHidden(false) : setHidden(true))}
      >
        <IconDown
          className={`${
            !hidden ? "selectsize__button-icon" : "selectsize__button-icon_active"
          }`}
        />
      </button>
    </ul>
  );
}

export default SizeOption;
