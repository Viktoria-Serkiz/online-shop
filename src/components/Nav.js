import { Link } from "react-router-dom";
// import Catalogue from "../pages/Catalogue";

const Nav = () => {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--item">New in</li>
          <li className="header__nav--item">Clothing</li>
          <li className="header__nav--item">Shoes</li>
          <li className="header__nav--item">Accessories</li>
          <li className="header__nav--item">Brands</li>
          <li className="header__nav--item">Sale</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
