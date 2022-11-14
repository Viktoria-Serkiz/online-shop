import { Link, Outlet } from "react-router-dom";
import Logo from "../img/dressnote.svg";
import Headericons from "./Headericons";
import Nav from "./Nav";
import Searchbar from "./Searchbar";
import Instagramicon from "../img/instagram.svg";
import Facebook from "../img/facebook.svg";
import Pinteresticon from "../img/pinterest.svg";
import Twittericon from "../img/twitter.svg";
import Youtubeicon from "../img/youtube.svg";
import Logoblack from "../img/logo-black.svg";

const Headerfooter = () => {
  return (
    <>
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
      <Outlet />
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__navigation">
              <ul className="footer__navigation--list">
                <li className="footer__navigation--item">Customer support</li>
                <li className="footer__navigation--item">Size guides</li>
                <li className="footer__navigation--item">Shipping</li>
                <li className="footer__navigation--item">Returns</li>
                <li className="footer__navigation--item">Track my order</li>
              </ul>
              <ul className="footer__navigation--list">
                <li className="footer__navigation--item">My account</li>
                <li className="footer__navigation--item">Order history</li>
                <li className="footer__navigation--item">Payment methods</li>
                <li className="footer__navigation--item">Account settings</li>
                <li className="footer__navigation--item">Favorites</li>
              </ul>
            </div>
            <div className="footer__info">
              <p className="footer__info--text">
                Sign up today for email exclusives including early access to
                Sale, the latest trends and arrivals from your favorite
                designers and can’t miss promotions.
              </p>
              <form className="footer__form">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="footer__form--input"
                />
                <button type="button" className="footer__form--button">
                  Subscribe
                </button>
              </form>
              <div className="footer__icons">
                <a href="/" className="footer__icons--link">
                  <img src={Instagramicon} alt="" />
                </a>
                <a href="/" className="footer__icons--link">
                  <img src={Facebook} alt="" />
                </a>
                <a href="/" className="footer__icons--link">
                  <img src={Twittericon} alt="" />
                </a>
                <a href="/" className="footer__icons--link">
                  <img src={Pinteresticon} alt="" />
                </a>
                <a href="/" className="footer__icons--link">
                  <img src={Youtubeicon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="container">
            <div className="footer__copyright--wrapper">
              <div>
                <img
                  src={Logoblack}
                  alt="dressnote"
                  width="164px"
                  height="16px"
                />
              </div>
              <p className="footer__copyright--text">(С) 2021 All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Headerfooter;
