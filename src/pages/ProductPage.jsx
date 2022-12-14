import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import StarRating from "../components//ProductPage/StarRating";
import Slider2 from "../components/Main/Slider2";
import SearchImg from "../components/ProductPage/searchproduct.jpg";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="searchpage container">
        <div className="searchpage__container">
          <p className="searchpage__bread">
            Home / Clothing / Dresses / Missguided / Missguided
          </p>
          <div className="searchpage__info">
            <img
              src={SearchImg}
              alt="searchImg"
              className="searchpage__info--img"
            />
            <div className="searchpage__info--wrap">
              <p className="searchpage__info--subtitle">Missguided</p>
              <h2 className="searchpage__info--title">
                Printed poplin dress with puff sleeves
              </h2>
              <StarRating />
              <p className="searchpage__price">$44.90</p>
              <div className="searchpage__selectcolor">
                <p className="searchpage__selectcolor--subtitle">
                  Select color:
                </p>
                <p className="searchpage__selectcolor--subcolor">
                  White/red patterned
                </p>
              </div>
              <div className="searchpage__color">
                <button className="searchpage__color--red searchpage__color--btn"></button>
                <button className="searchpage__color--violet searchpage__color--btn"></button>
              </div>
              <div className="searchpage__size">
                <p className="searchpage__size--subtitle">Select size:</p>
                <p className="searchpage__size--subtitle">Size guide</p>
              </div>
            </div>
          </div>
          <Slider2 />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
