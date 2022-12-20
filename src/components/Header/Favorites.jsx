import { useSelector } from "react-redux";
import Card from "../Card";

const Favorites = () => {
  const favorites = useSelector((store) => store.favorites);

  if (favorites.length > 0) {
    return favorites.map((item) => (
      <Card value={item} key={`favorites__${item.id}`}></Card>
    ));
  }
  return (
    <div className="container">
      <h1 className="header__favorites">Favorites to Be Desplayed Here</h1>
    </div>
  );
};

export default Favorites;
