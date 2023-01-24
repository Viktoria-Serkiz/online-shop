import { useEffect } from "react";
import Glide from "@glidejs/glide";

import Zara from "../img/new-arrivals/pic-1.jpg";
import Desigual from "../img/new-arrivals/pic-2.jpg";
import Zara1 from "../img/new-arrivals/pic-3.jpg";
import Monki from "../img/new-arrivals/pic-4.jpg";
import Like from "../img/like.svg";

const glideConfig = {
  perView: 4,
  gap: 30,
  autoplay: 4000,
  animationDuration: 1000,
  animationTimingFunc: "linear",
  type: "carousel",
};

const Slider = ({ className = "glide" }) => {
  const slider = new Glide(`.${className}`, glideConfig);

  useEffect(() => {
    slider.mount();
  }, [slider]);

  return (
    <>
      <div className="container">
        <div className={className}>
          <h2 className="glide__title">New arrivals</h2>
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
                    <img src={Zara} alt="" />
                  </div>
                  <p className="card__brand">ZARA</p>
                  <p className="card__item">Patterned suite</p>
                  <p className="card__price">$75.90</p>
                  <button className="card__like">
                    <img src={Like} alt="" width="16" height="14" />
                  </button>
                </div>
              </li>

              <li className="glide__slide">
                <div className="card">
                  <div className="card__img">
                    <img src={Desigual} alt="" />
                  </div>
                  <p className="card__brand">Desigual</p>
                  <p className="card__item">Ethnic dress with embroidery</p>
                  <p className="card__price">$139.90</p>
                  <button className="card__like">
                    <img src={Like} alt="" width="16" height="14" />
                  </button>
                </div>
              </li>
              <li className="glide__slide">
                <div className="card">
                  <div className="card__img">
                    <img src={Zara1} alt="" />
                  </div>
                  <p className="card__brand">Zara</p>
                  <p className="card__item">Patchwork mini skirt</p>
                  <p className="card__price">$55.90</p>
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
                  <p className="card__item">Ultramarine culottes</p>
                  <p className="card__price">$62.90</p>
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

export { Slider };
