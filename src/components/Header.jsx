import Headericons from "./Headericons";
import Nav from "./Nav";
import Searchbar from "./Searchbar";
import Logo from "../img/dressnote.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__logo">
            <img src={Logo} alt="" width="164px" height="16px" />
          </div>
          <div>
            <Headericons></Headericons>
          </div>
        </div>
      </div>
      <div className="header__menu">
        <div className="container">
          <div className="header__menu--list">
            <Nav></Nav>
            <Searchbar></Searchbar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
