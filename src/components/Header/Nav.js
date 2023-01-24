import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav_list">
          <li className="header__nav_item">
            <NavLink to="/new-in" className="header__nav_link">
              New in
            </NavLink>
          </li>
          <li className="header__nav_item">
            <NavLink to="/category" className="header__nav_link">
              Clothing
            </NavLink>
          </li>
          <li className="header__nav_item">
            <NavLink to="" className="header__nav_link">
              Shoes
            </NavLink>
          </li>
          <li className="header__nav_item">
            <NavLink to="" className="header__nav_link">
              Accessories
            </NavLink>
          </li>
          <li className="header__nav_item">
            <NavLink to="" className="header__nav_link">
              Brands
            </NavLink>
          </li>
          <li className="header__nav_item">
            <NavLink to="" className="header__nav_link">
              Sale
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
