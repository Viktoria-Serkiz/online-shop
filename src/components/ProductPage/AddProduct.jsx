import { Wishlist } from "../icons";

const AddProduct = () => {
  return (
    <div className="addproduct">
      <button type="button" className="addproduct__button btn">
        Add to cart
      </button>
      <button className="addproduct__like btn">{<Wishlist />}</button>
    </div>
  );
};

export default AddProduct;
