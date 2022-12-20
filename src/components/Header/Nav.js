import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav_list">
          <li className="header__nav_item">
            <Link to="/new-in" className="header__nav_link">
              New in
            </Link>
          </li>
          <li className="header__nav_item">
            <Link to="/category" className="header__nav_link">
              Clothing
            </Link>
          </li>
          <li className="header__nav_item">
            <Link to="" className="header__nav_link">
              Shoes
            </Link>
          </li>
          <li className="header__nav_item">
            <Link to="" className="header__nav_link">
              Accessories
            </Link>
          </li>
          <li className="header__nav_item">
            <Link to="" className="header__nav_link">
              Brands
            </Link>
          </li>
          <li className="header__nav_item">
            <Link to="" className="header__nav_link">
              Sale
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
