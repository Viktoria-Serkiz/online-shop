import { useSelector } from "react-redux";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import EmptyCard from "../img/empty-cart.png";

const Favorites = () => {
  const favorites = useSelector((store) => store.favorites);

  if (favorites.length > 0) {
    return (
      <div className="container">
        <div className="favorites">
          <h2 className="favorites__title">Saved items</h2>
          <div className="favorites__count">{favorites.length} items</div>
          <div className="favorites__cards">
            {favorites.map((item) => (
              <Card value={item} key={`favorites__${item.id}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      {/* <h1 className="favorites">Favorites to Be Desplayed Here</h1> */}
      <div className="favorites__empty">
        <div>
          <img src={EmptyCard} alt="" width={100} height={100} />
        </div>
        <p className="favorites__empty_text">You have no saved items.</p>
        <p className="favorites__empty_text">
          Start saving as you shop by selecting the little heart.
        </p>
        <Link to="/home">
          <button className="favorites__empty_button btn">Start shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
