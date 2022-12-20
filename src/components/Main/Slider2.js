import { useEffect } from "react";
import Glide from "@glidejs/glide";

import ReclaimedVintage from "../../img/picks-for-you/pic-1.jpg";
import TedBaker from "../../img/picks-for-you/pic-2.jpg";
import Monki from "../../img/picks-for-you/pic-3.jpg";
import PeopleTree from "../../img/picks-for-you/pic-4.jpg";
import Like from "../../img/like.svg";

const glide = {
  perView: 4,
  gap: 30,
  autoplay: 3000,
  type: "carrousel",
};

const Slider2 = ({ className = "glide2" }) => {
  const slider = new Glide(`.${className}`, glide);

  useEffect(() => {
    slider.mount();
  }, [slider]);

  return (
    <>
      <div className="container">
        <div className={className}>
          <h2 className="glide__title">Our picks for you</h2>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow_left"
              data-glide-dir="<"
            ></button>
            <button
              className="glide__arrow glide__arrow_right"
              data-glide-dir=">"
            ></button>
          </div>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className="card">
                  <div className="card__img">
                    <img src={ReclaimedVintage} alt="" />
                  </div>
                  <p className="card__brand">Reclaimed Vintage</p>
                  <p className="card__item">Lounge style pleated suit</p>
                  <p className="card__price">$82.90</p>
                  <button className="card__like">
                    <img src={Like} alt="" width="16" height="14" />
                  </button>
                </div>
              </li>
              <li className="glide__slide">
                <div className="card">
                  <div className="card__img">
                    <img src={TedBaker} alt="" />
                  </div>
                  <p className="card__brand">Ted Baker</p>
                  <p className="card__item">Cropped suit in pink</p>
                  <p className="card__price">$36.90</p>
                  <button className="card__like">
                    <img src={Like} alt="" width="16" height="14" />
                  </button>
                </div>
              </li>
              <li className="glide__slide">
                <div className="card">
                  <div className="card__img">
                    <img src={Monki} alt="" />
                  </div>
                  <p className="card__brand">Monki</p>
                  <p className="card__item">Fine knit mini dress</p>
                  <p className="card__price">$42.00</p>
                  <button className="card__like">
                    <img src={Like} alt="" width="16" height="14" />
                  </button>
                </div>
              </li>
              <li className="glide__slide">
                <div className="card">
                  <div className="card__img">
                    <img src={PeopleTree} alt="" />
                  </div>
                  <p className="card__brand">People tree</p>
                  <p className="card__item">Printed mini shirt dress</p>
                  <p className="card__price">$51.90</p>
                  <button className="card__like">
                    <img src={Like} alt="" width="16" height="14" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider2;
