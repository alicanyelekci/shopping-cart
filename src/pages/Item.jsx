import { useOutletContext, useLocation } from "react-router-dom";
import StarRating from "../StarRating";

export default function Item() {
  const location = useLocation();
  const item = location.state;

  const { increaseCart } = useOutletContext();

  return (
    <div className="item">
      <div className="title">{item.title}</div>
      <div className="img-container">
        <img className="image" src={item.image} />
      </div>
      <div className="price">${item.price}</div>
      <StarRating
        rating={item.rating.rate}
        count={item.rating.count}
        className="rating"
      />
      <button className="addBtn" onClick={() => increaseCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}
