import { useOutletContext, useLocation } from "react-router-dom";
import StarRating from "../StarRating";

export default function Item() {
  const location = useLocation();
  const item = location.state;

  const { increaseCart } = useOutletContext();

  return (
    <div className="item">
      <div>{item.title}</div>
      <img src={item.image} />
      <div>${item.price}</div>
      <StarRating rating={item.rating.rate} count={item.rating.count} />
      <button onClick={() => increaseCart(item)}>Add to Cart</button>
    </div>
  );
}
