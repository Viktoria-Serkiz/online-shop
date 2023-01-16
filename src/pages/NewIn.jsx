import { useSelector } from "react-redux";
import newInPhoto from "../img/newInPhoto.jpg";
import Spinner from "../img/spinner.svg";
import Card from "../components/Card";

const NewIn = () => {
  const { loading, error, clothing } = useSelector((store) => store.clothing);

  return (
    <>
      <div className="container catalogue">
        <div className="search"></div>
        <div className="catalogue__inner">
          <div className="photoCatalogue">
            <h2 className="photoCatalogue__title">New in</h2>
            <p className="photoCatalogue__subtitle">
              This season, inside is cancelled
            </p>
            <img
              src={newInPhoto}
              alt="foto"
              className="photoCatalogue__photo"
            />
          </div>
          <p className="catalogue__title">New in</p>
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
                  return <Card value={item} key={`newIn__${id}`}></Card>;
                })}
              {error && error}
            </div>
          </div>
          <div className="catalogue__more">
            <p className="catalogue__more_text">
              You’ve viewed 12 of 1403 products
            </p>
            <button className="catalogue__more_btn btn"> Load more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewIn;
