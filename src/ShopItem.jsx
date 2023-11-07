import StarRating from "./StarRating";
import { Link } from "react-router-dom";

export default function ShopItem({ item }) {
  const link = "/shop/" + item.id;

  return (
    <div className="shop-item">
      <Link to={link} state={item}>
        <div>{item.title}</div>
        <img src={item.image} />
      </Link>
      <div>${item.price}</div>
      <StarRating rating={item.rating.rate} count={item.rating.count} />
    </div>
  );
}
