import NewBalance from "../img/partners/new-balance.svg";
import Martens from "../img/partners/martens.svg";
import Converse from "../img/partners/converce.svg";
import Steve from "../img/partners/steve-madden.svg";
import Ugg from "../img/partners/ugg-australia.svg";

const Partners = () => {
  return (
    <>
      <div className="container">
        <div className="partners">
          <ul className="partners__list">
            <li className="partners__item">
              <img src={NewBalance} alt="" width="108" height="50" />
            </li>
            <li className="partners__item">
              <img src={Martens} alt="" width="110" height="60" />
            </li>
            <li className="partners__item">
              <img src={Converse} alt="" width="110" height="16" />
            </li>
            <li className="partners__item">
              <img src={Steve} alt="" width="110" height="60" />
            </li>
            <li className="partners__item">
              <img src={Ugg} alt="" width="110" height="60" />
            </li>
          </ul>
          <a className="partners__link" href="/">All brands</a>
        </div>
      </div>
    </>
  );
};

export default Partners;
