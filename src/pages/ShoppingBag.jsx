import Slider2 from "../components/Main/Slider2";
import Partners from "../components/Main/Partners";

const ShoppingBag = () => {
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
          <div>
          </div>
          <div className="shopping-bag__total">
            <p className="shopping-bag__total_item">Clear bag</p>
            <p className="shopping-bag__total_item">Subtotal: </p>
          </div>
        </div>
        <div className="shopping-bag__summary"></div>
      </div>
      <Slider2 />
      <Partners />
    </div>
  );
};

export default ShoppingBag;
