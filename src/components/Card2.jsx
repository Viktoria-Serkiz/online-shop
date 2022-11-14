import Pic1 from "../img/picks-for-you/pic-1.jpg";
import Pic2 from "../img/picks-for-you/pic-2.jpg";
import Pic3 from "../img/picks-for-you/pic-3.jpg";
import Pic4 from "../img/picks-for-you/pic-4.jpg";
import Like from "../img/like.svg";

const Card2 = () => {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img src={Pic1} alt="" />
        </div>
        <p className="card__brand">Reclaimed Vintage</p>
        <p className="card__item">Lounge style pleated suit</p>
        <p className="card__price">$82.90</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
      <div className="card">
        <div className="card__img">
          <img src={Pic2} alt="" />
        </div>
        <p className="card__brand">Ted Baker</p>
        <p className="card__item">Cropped suit in pink</p>
        <p className="card__price">$36.90</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
      <div className="card">
        <div className="card__img">
          <img src={Pic3} alt="" />
        </div>
        <p className="card__brand">Monki</p>
        <p className="card__item">Fine knit mini dress</p>
        <p className="card__price">$42.00</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
      <div className="card">
        <div className="card__img">
          <img src={Pic4} alt="" />
        </div>
        <p className="card__brand">People tree</p>
        <p className="card__item">Printed mini shirt dress</p>
        <p className="card__price">$51.90</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
    </>
  );
};

export default Card2;
