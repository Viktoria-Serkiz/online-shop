import { TrashSvg } from "./shopIcon";
import { cardRemoveAll } from "../../store/actions/cardAction";
import { useDispatch } from "react-redux";

const ClearBag = ({ subtotal = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className="bag-clear">
      <div className="bag-clear__btn ">
        <button
          type="button"
          className="btn bag-clear__btn_delete"
          onClick={() => {
            dispatch(cardRemoveAll());
          }}
        >
          <TrashSvg />
          Clear bag
        </button>
      </div>
      <div className="bag-clear__total">
        <span className="bag-clear__total_item">Subtotal:</span>
        <span className="bag-clear__total_item bag-clear__total_price">
          ${subtotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ClearBag;
