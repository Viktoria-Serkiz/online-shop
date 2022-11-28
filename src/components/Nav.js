import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--item">
            <Link to="/new-in" className="header__nav--link">
              New in
            </Link>
          </li>
          <li className="header__nav--item">
            <Link to="/category" className="header__nav--link">
              Clothing
            </Link>
          </li>
          <li className="header__nav--item">
            <Link to="" className="header__nav--link">
              Shoes
            </Link>
          </li>
          <li className="header__nav--item">
            <Link to="" className="header__nav--link">
              Accessories
            </Link>
          </li>
          <li className="header__nav--item">
            <Link to="" className="header__nav--link">
              Brands
            </Link>
          </li>
          <li className="header__nav--item">
            <Link to="" className="header__nav--link">
              Sale
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
