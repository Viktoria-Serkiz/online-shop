import Dresses from "../img/categories/dresses.jpg";
import Skirts from "../img/categories/skirts.jpg";
import Tops from "../img/categories/tops.jpg";
import Bags from "../img/categories/bags.jpg";
import Swimwear from "../img/categories/swimwear.jpg";
import Shoes from "../img/categories/shoes.jpg";

const Categorycards = () => {
  return (
    <>
      <div className="item">
        <img src={Dresses} alt="" />
        <p className="item__text">Dresses</p>
      </div>
      <div className="item">
        <img src={Skirts} alt="" />
        <p className="item__text">Skirts</p>
      </div>
      <div className="item">
        <img src={Tops} alt="" />
        <p className="item__text">Tops</p>
      </div>
      <div className="item">
        <img src={Bags} alt="" />
        <p className="item__text">Bags</p>
      </div>
      <div className="item">
        <img src={Swimwear} alt="" />
        <p className="item__text">Swimwear</p>
      </div>
      <div className="item">
        <img src={Shoes} alt="" />
        <p className="item__text">Shoes</p>
      </div>
    </>
  );
};

export default Categorycards;
