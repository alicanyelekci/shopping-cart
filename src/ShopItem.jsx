import StarRating from "./starRating";

export default function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <div>{item.title}</div>
      <img src={item.image} />
      <div>${item.price}</div>
      <StarRating rating={item.rating.rate} count={item.rating.count} />
      <button>Add to Cart</button>
    </div>
  );
}
