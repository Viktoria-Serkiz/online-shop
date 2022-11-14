import Card from "./Card";
import Glide from "@glidejs/glide";
import Arrow from "../img/right-arrow.svg";

new Glide(".glide", {
  type: "slider",
  startAt: 1,
  perView: 4,
  gap: 30,
});

const Slider = () => {
  return (
    <>
      <div className="container">
        <div class="glide__arrows" data-glide-el="controls">
          <h2 className="glide__title">New arrivals</h2>
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            <img src={Arrow} alt="" />
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <img src={Arrow} alt="" />
          </button>
        </div>
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <Card></Card>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
