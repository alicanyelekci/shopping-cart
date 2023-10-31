export default function ShopItem({ item }) {
  return (
    <>
      <div>{item.title}</div>
      <img src={item.image} />
      <div>{item.price}</div>
      <div>
        {item.rating.rate} | {item.rating.count}
      </div>
    </>
  );
}
