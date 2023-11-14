import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cartList, handleCart } = useOutletContext();

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div>Cart</div>
      {cartList.map((item) => {
        return (
          <div key={item.id} className="cart-item">
            <div>{item.title}</div>
            <img src={item.image} />
            <div>${item.price}</div>
            <div>{item.count}</div>
            <div>+</div>
            {item.count === 1 ? <div>Remove</div> : <div>-</div>}
            <div>Subtotal = ${item.price * item.count}</div>
          </div>
        );
      })}
      <div>TOTAL = ${total}</div>
    </>
  );
}
