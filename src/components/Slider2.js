import Glide from "@glidejs/glide";
import Arrow from "../img/right-arrow.svg";
import Pic1 from "../img/picks-for-you/pic-1.jpg";
import Pic2 from "../img/picks-for-you/pic-2.jpg";
import Pic3 from "../img/picks-for-you/pic-3.jpg";
import Pic4 from "../img/picks-for-you/pic-4.jpg";
import Like from "../img/like.svg";

const Slider2 = () => {
  document.querySelectorAll(".glide-slide").forEach(() => {
    let glideItem = new Glide(".glide-slide", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      gap: 30,
      autoplay: 3000,
      animationDuration: 1000,
      animationTimingFunc: "linear",
    });
    glideItem.mount();
  });
  return (
    <>
      <div className="container">
        <div class=" glide-slide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
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
              </li>
              <li class="glide__slide">
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
              </li>
              <li class="glide__slide">
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
              </li>
              <li class="glide__slide">
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
              </li>
            </ul>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <h2 className="glide__title">Our picks for you</h2>
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <img src={Arrow} alt="" />
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <img src={Arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider2;
