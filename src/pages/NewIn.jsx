import Header from "../components/Header";
import Categories from "../components/Search/Categories";
import Size from "../components/Search/Size";
import Footer from "../components/Footer/Footer";
import { getClothing } from "../api/clothing";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clothingLoading,
  clothingSuccess,
  clothingError,
} from "../store/actions/clothingAction";
import newInPhoto from "../img/newInPhoto.jpg";
import Spinner from "../img/spinner.svg";
import Card from "../components/Card";

const NewIn = () => {
  const dispatch = useDispatch();
  const { loading, error, clothing } = useSelector((store) => store.clothing);

  useEffect(() => {
    dispatch(clothingLoading());
    getClothing()
      .then(({ data }) => {
        dispatch(clothingSuccess(data));
      })
      .catch((error) => {
        dispatch(clothingError(error.massage));
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container newin">
        <div className="search">
          <Categories />
          <Size />
        </div>
        <div className="newin__inner">
          <div className="photoNewIn">
            <h2 className="photoNewIn__title">New in</h2>
            <p className="photoNewIn__subtitle">
              This season, inside is cancelled
            </p>
            <img src={newInPhoto} alt="foto" className="photoNewIn__photo" />
          </div>
          <p className="newin__title">New in</p>
          <div className="newin__sub">
            <p className="newin__sub--text">1403 items</p>
            <p className="newin__sub--text">
              Sort by: <b>Price Low-High</b>
            </p>
          </div>
          <div className="cards__container">
            <div className="cards__wrap">
              {loading && (
                <div className="spinner">
                  <img src={Spinner} alt="loading..."></img>
                </div>
              )}
              {clothing &&
                clothing.map(({ image, price, title, id }) => {
                  return (
                    <Card
                      image={image}
                      price={price}
                      title={title}
                      key={`newInItem__${id}`}
                    ></Card>
                  );
                })}
              {error && error}
            </div>
          </div>
          <div className="newin__more">
            <p className="newin__more--text">
              You’ve viewed 12 of 1403 products
            </p>
            <button className="newin__more--btn"> Load more</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewIn;
