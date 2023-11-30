import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cartList, increaseCart, decreaseCart, emptyCart } =
    useOutletContext();

  const total = cartList.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <>
      {total !== 0 ? <div onClick={() => emptyCart()}>EMPTY CART</div> : <></>}
      {cartList.map((item) => {
        return (
          <div key={item.id} className="cart-item">
            <div>{item.title}</div>
            <img src={item.image} />
            <div>${item.price}</div>
            <div>{item.count}</div>
            <div onClick={() => increaseCart(item)}>+</div>
            {item.count === 1 ? (
              <div onClick={() => decreaseCart(item)}>Remove</div>
            ) : (
              <div onClick={() => decreaseCart(item)}>-</div>
            )}
            <div>Subtotal = ${(item.price * item.count).toFixed(2)}</div>
          </div>
        );
      })}
      {total !== 0 ? <div>TOTAL = ${total.toFixed(2)}</div> : <></>}
      {total !== 0 ? <div>CHECKOUT</div> : <></>}
    </>
  );
}
