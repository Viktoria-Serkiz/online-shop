import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components//ProductPage/StarRating";
import Slider2 from "../components/Main/Slider2";
import axios from "axios";
import Spinner from "../img/spinner.svg";
import SizeOption from "../components/ProductPage/SizeOption";
import ColorSelection from "../components/ProductPage/ColorSelection";
import AddProduct from "../components/ProductPage/AddProduct";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProductData(data);
      setLoading(false);
    });
  }, [id]);

  const { title, price, description, category, image, rating } = productData;

  return loading ? (
    <div className="spinner">
      <img src={Spinner} alt="loading..."></img>
    </div>
  ) : (
    <div className="searchpage container">
      <div className="searchpage__container">
        <p className="searchpage__bread">
          Home / Clothing / Dresses / Missguided / Missguided
        </p>
        <div className="searchpage__info">
          <img src={image} alt="searchImg" className="searchpage__info_img" />
          <div className="searchpage__info_wrap">
            <p className="searchpage__info_subtitle">{category}</p>
            <h2 className="searchpage__info_title">{title}</h2>
            <StarRating rate={Math.round(rating?.rate)} vote={rating?.count} />
            <p className="searchpage__price">${price}</p>
            <ColorSelection />
            <div className="searchpage__size">
              <p className="searchpage__size_subtitle">Select size:</p>
              <p className="searchpage__size_subtitle">Size guide</p>
            </div>
            <SizeOption />
            <AddProduct />
            <section>
              <h3 className="visually-hidden">Product information</h3>
              <article className="searchpage__description">
                <h4 className="searchpage__description_title">
                  Product details
                </h4>
                <p className="searchpage__description_text">{description}</p>
              </article>
            </section>
          </div>
        </div>
        <Slider2 />
      </div>
    </div>
  );
};

export default ProductPage;
