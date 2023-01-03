const BagOrder = ({ subtotal, shippingSum }) => {
  return (
    <div className="bag-order">
      <h3 className="bag-order__title">Order summary</h3>
      <div className="bag-order__price">
        <span className="bag-order__price_text">Subtotal</span>
        <span className="bag-order__price_text">${Math.round(subtotal)}</span>
      </div>
      <div className="bag-order__price">
        <span className="bag-order__price_text">Shipping</span>
        <span className="bag-order__price_text">${shippingSum}</span>
      </div>
      <form className="bag-order__form">
        <input
          type="text"
          className="bag-order__form_input"
          placeholder="Promocode"
        />
        <button className="bag-order__form_btn btn">Apply</button>
      </form>
      <div className="bag-order__total">
        <span className="bag-order__total_price">Order total</span>
        <span className="bag-order__total_price">
          ${Math.round(subtotal + shippingSum)}
        </span>
      </div>
      <button className="btn bag-order__checkout">Proceed to checkout</button>
    </div>
  );
};

export default BagOrder;
