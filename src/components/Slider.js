import Glide from "@glidejs/glide";
import Arrow from "../img/right-arrow.svg";
import Pic1 from "../img/new-arrivals/pic-1.jpg";
import Pic2 from "../img/new-arrivals/pic-2.jpg";
import Pic3 from "../img/new-arrivals/pic-3.jpg";
import Pic4 from "../img/new-arrivals/pic-4.jpg";
import Like from "../img/like.svg";

const Slider = () => {
  document.querySelectorAll(".glide").forEach((element) => {
    let glideItem = new Glide(".glide", {
      type: "carousel",
      startAt: 1,
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
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
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
              </li>
              <li class="glide__slide">
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
              </li>
              <li class="glide__slide">
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
              </li>
              <li class="glide__slide">
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
              </li>
            </ul>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <h2 className="glide__title">New arrivals</h2>
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

export default Slider;

// new Glide(".glide", {
//   type: "carousel",
//   startAt: 0,
//   perView: 4,
//   gap: 30,
//   autoplay: 3000,
//   animationDuration: 1000,
//   animationTimingFunc: "linear",
// });
// // glide.mount();

// const Slider = () => {
//   return (
//     <>
//       <div className="container">
//         <div class="glide">
//           <div class="glide__track" data-glide-el="track">
//             <ul class="glide__slides">
//               <li class="glide__slide">
//                 <Card></Card>
//               </li>
//             </ul>
//           </div>
//           <div class="glide__arrows" data-glide-el="controls">
//             <h2 className="glide__title">New arrivals</h2>
//             <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
//               <img src={Arrow} alt="" />
//             </button>
//             <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
//               <img src={Arrow} alt="" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;
