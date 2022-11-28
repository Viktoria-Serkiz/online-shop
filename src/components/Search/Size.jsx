const Size = () => {
  return (
    <div className="size">
      <p className="size__tittle">Size</p>
      <input className="size__search" type="text" placeholder="Seach size" />
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 00 (XXS)
      </label>
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 02 (XS)
      </label>
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 04 (S)
      </label>
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 06 (M)
      </label>
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 08 (L)
      </label>
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 10 (XL)
      </label>
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 12 (XXL)
      </label>
      <label className="checkbox">
        <input className="checkbox__tip" type="checkbox" /> 14 (3XL)
      </label>
    </div>
  );
};

export default Size;
