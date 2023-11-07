import { useOutletContext, useLocation } from "react-router-dom";

import StarRating from "../StarRating";
import { useEffect } from "react";

export default function Item() {
  const location = useLocation();
  const item = location.state;

  const handleCart = useOutletContext();

  const addToCart = (addedItem) => {
    handleCart.handleCart();
    console.log("added");
  };

  return (
    <div className="item">
      <div>{item.title}</div>
      <img src={item.image} />
      <div>${item.price}</div>
      <StarRating rating={item.rating.rate} count={item.rating.count} />
      <button onClick={() => addToCart(item.title)}>Add to Cart</button>
    </div>
  );
}
