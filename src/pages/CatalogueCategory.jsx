import { getClothing } from "../api/clothing";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clothingLoading,
  clothingSuccess,
  clothingError,
} from "../store/actions/clothingAction";
import Spinner from "../img/spinner.svg";
import Card from "../components/Card";
import cataloguePhoto from "../img/cataloguePhoto.jpg";

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
      <div className="container catalogue">
        <div className="search">
          {/* <Categories />
          <Size /> */}
        </div>
        <div className="catalogue__inner">
          <div className="photoCatalogue">
            <h2 className="photoCatalogue__title">Final clearance</h2>
            <p className="photoCatalogue__subtitle">
              Take 20% off ‘Sale Must Haves’
            </p>
            <img
              src={cataloguePhoto}
              alt="foto"
              className="photoCatalogue__photo"
            />
          </div>
          <p className="catalogue__title">Dresses</p>
          <div className="catalogue__sub">
            <p className="catalogue__sub_text">1403 items</p>
            <p className="catalogue__sub_text">
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
                clothing.map((item, id) => {
                  return <Card value={item} key={`catalogue__${id}`}></Card>;
                })}
              {error && error}
            </div>
          </div>
          <div className="catalogue__more">
            <p className="catalogue__more_text">
              You’ve viewed 12 of 1403 products
            </p>
            <button className="catalogue__more_btn"> Load more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogueCategory;
