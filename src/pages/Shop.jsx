import { useOutletContext } from "react-router-dom";
import ShopItem from "../ShopItem";

export default function Catalog() {
  const { productList } = useOutletContext();

  return (
    <>
      <h1>Shop</h1>
      {productList.map((item) => {
        return <ShopItem key={item.id} item={item} />;
      })}
    </>
  );
}
