import { useOutletContext } from "react-router-dom";
import ShopItem from "../ShopItem";

export default function Catalog() {
  const { productList } = useOutletContext();

  return (
    <>
      <div className="shop-container">
        {productList.map((item) => {
          return <ShopItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}
