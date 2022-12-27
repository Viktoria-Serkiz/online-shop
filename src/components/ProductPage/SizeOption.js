import { useState } from "react";

function SizeOption() {
  const sizes = [34, 36, 38, 40, 42];
  const [selection, setSelection] = useState(null);
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
    </ul>
  );
}

export default SizeOption;
