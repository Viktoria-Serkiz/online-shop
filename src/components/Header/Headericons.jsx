import { Link } from "react-router-dom";
import { FavoriteIcon, SignInIcon, ShoppingBagIcon } from "../icons";

const Headericons = () => {
  return (
    <>
      <div>
        <Link to="/favorites">
          <button type="button" className="header__icons btn">
            <FavoriteIcon />
          </button>
        </Link>
        <Link to="/signIn">
          <button type="button" className="header__icons btn">
            <SignInIcon />
          </button>
        </Link>
        <Link to="/shopping-bag">
          <button type="button" className="header__icons btn">
            <ShoppingBagIcon />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Headericons;
