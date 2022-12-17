import { useState } from "react";

const ColorSelection = () => {
  const [colorSelect, setColorSelect] = useState(null);
  const colors = ["Red", "Violet"];

  return (
    <>
      <div className="searchpage__selectcolor">
        <p className="searchpage__selectcolor_subtitle">Select color:</p>
        <p className="searchpage__selectcolor_subcolor">{colorSelect}</p>
      </div>
      <div className="searchpage__color">
        {colors.map((value, index) => (
          <button
            className="color searchpage__color_btn"
            onClick={(e) => {
              setColorSelect(value);
            }}
            style={{ background: `${value}` }}
            key={`color_${index}`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default ColorSelection;
