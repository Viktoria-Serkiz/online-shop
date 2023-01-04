import { useState, useEffect } from "react";
import { Slider } from "../components/Main/Slider";
import Partners from "../components/Main/Partners";
import CartItems from "../components/ShoppingCart/CartItems";
import ClearBag from "../components/ShoppingCart/ClearBag";
import BagOrder from "../components/ShoppingCart/BagOrder";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCard from "../img/add-to-cart.png";

const ShoppingCart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const shoppingCart = useSelector((store) => store.card);

  useEffect(() => {
    const sum = shoppingCart.reduce((accumulator, item) => {
      return accumulator + item.price * item.count;
    }, 0);

    const shippingSum = shoppingCart.reduce((accumulator, item) => {
      return accumulator + item.costDelivery * item.count;
    }, 0);

    setSubtotal({ sum, shippingSum });
  }, [shoppingCart]);

  if (shoppingCart.length > 0) {
    return (
      <div className="container shopping-bag">
        <h1 className="shopping-bag__title">Shopping bag</h1>
        <div className="shopping-bag__wrapper">
          <div className="shopping-bag__item">
            <div className="shopping-bag__name">
              <p className="shopping-bag__name_item">Item</p>
              <p className="shopping-bag__name_item">Price</p>
              <p className="shopping-bag__name_item">Quantity</p>
              <p className="shopping-bag__name_item">Total</p>
            </div>
            {shoppingCart.map((item, index) => {
              return <CartItems key={`cart_srh${index}`} {...item} />;
            })}
            <ClearBag subtotal={subtotal.sum} />
          </div>
          <BagOrder
            subtotal={subtotal.sum}
            shippingSum={subtotal.shippingSum}
          />
        </div>
        <Slider />
        <Partners />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="favorites__empty">
        <div>
          <img src={EmptyCard} alt="" width={100} height={100} />
        </div>
        <p className="favorites__empty_text">The basket is empty</p>
        <Link to="/home">
          <button className="favorites__empty_button btn">
            Start shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
