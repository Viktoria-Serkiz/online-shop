import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { getClothing } from "../api/clothing";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clothingLoading,
  clothingSuccess,
  clothingError,
} from "../store/actions/clothingAction";
import Spinner from "../img/spinner.svg";
import Like from "../img/like.svg";

const CatalogueCategory = () => {
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
      <div className="container card__container">
        {loading && (
          <div className="spinner">
            <img src={Spinner} alt="loading..."></img>
          </div>
        )}
        {clothing &&
          clothing.map(({ title, id, image, description, price }) => {
            return (
              <div className="card" key={id}>
                <div className="card__img">
                  <img src={`${image}`} alt="" width={255} />
                </div>
                <p className="card__brand">{`${title}`}</p>
                <p className="card__item">{`${description}`}</p>
                <p className="card__price">{`${price}`}</p>

                <button className="card__like">
                  <img src={Like} alt="" width={16} height={14} />
                </button>
              </div>
            );
          })}
        {error && error}
      </div>
      <Footer />
    </>
  );
};

export default CatalogueCategory;
