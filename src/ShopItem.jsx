import StarRating from "./StarRating";
import { Link } from "react-router-dom";

export default function ShopItem({ item }) {
  const link = "/shop/" + item.id;

  return (
    <Link className="shop-item" to={link} state={item}>
      <img src={item.image} />
      <div className="item-title">{item.title}</div>
      <StarRating rating={item.rating.rate} count={item.rating.count} />
      <div className="item-price">${item.price}</div>
    </Link>
  );
}
