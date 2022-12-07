import Logoblack from "../../img/logo-black.svg";

const Footercopyright = () => {
  return (
    <div className="footer__copyright">
      <div className="container">
        <div className="footer__copyright--wrapper">
          <div>
            <img src={Logoblack} alt="dressnote" width="164px" height="16px" />
          </div>
          <p className="footer__copyright--text">
            (С) 2021 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export { Footercopyright };
