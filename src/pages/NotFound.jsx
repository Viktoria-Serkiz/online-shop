import { Link } from "react-router-dom";
import  errorImg  from "../img/error-404.png";

const NotFound = () => {
  return (
    <div className="notfound">
      <img
        src={errorImg}
        alt="error"
        className="notfound__img"
      ></img>
      <h1 className="notfound__title">Error 404: Page not found. </h1>
      <Link to="/home">
        <button className="notfound__btn btn">Back to Home page</button>
      </Link>
    </div>
  );
};

export default NotFound;
