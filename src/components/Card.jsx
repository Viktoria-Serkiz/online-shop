import Pic1 from "../img/new-arrivals/pic-1.jpg";
import Pic2 from "../img/new-arrivals/pic-2.jpg";
import Pic3 from "../img/new-arrivals/pic-3.jpg";
import Pic4 from "../img/new-arrivals/pic-4.jpg";
import Like from "../img/like.svg";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img src={Pic1} alt="" />
        </div>
        <p className="card__brand">ZARA</p>
        <p className="card__item">Patterned suite</p>
        <p className="card__price">$75.90</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
      <div className="card">
        <div className="card__img">
          <img src={Pic2} alt="" />
        </div>
        <p className="card__brand">Desigual</p>
        <p className="card__item">Ethnic dress with embroidery</p>
        <p className="card__price">$139.90</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
      <div className="card">
        <div className="card__img">
          <img src={Pic3} alt="" />
        </div>
        <p className="card__brand">Zara</p>
        <p className="card__item">Patchwork mini skirt</p>
        <p className="card__price">$55.90</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
      <div className="card">
        <div className="card__img">
          <img src={Pic4} alt="" />
        </div>
        <p className="card__brand">Monki</p>
        <p className="card__item">Ultramarine culottes</p>
        <p className="card__price">$62.90</p>
        <button className="card__like">
          <img src={Like} alt="" width="16" height="14" />
        </button>
      </div>
    </>
  );
};

export default Card;
