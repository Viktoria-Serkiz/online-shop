import Headericons from "./Headericons";
import Nav from "./Nav";
import Searchbar from "./Searchbar";
import Logo from "../../img/dressnote.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top">
            <Link to="/home">
              <div className="header__logo">
                <img src={Logo} alt="" width="164px" height="16px" />
              </div>
            </Link>
            <div>
              <Headericons />
            </div>
          </div>
        </div>
        <div className="header__menu">
          <div className="container">
            <div className="header__menu_list">
              <Nav />
              <Searchbar />
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
