import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cartList, increaseCart, decreaseCart, emptyCart } =
    useOutletContext();

  const total = useMemo(() => {
    return cartList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }, [cartList]);

  return (
    <div className="cart-container">
      {total === 0 ? (
        <div className="empty-cart">Looks like your cart is empty!</div>
      ) : (
        <></>
      )}
      {cartList.map((item) => {
        return (
          <div key={item.id} className="cart-item">
            <div className="title">{item.title}</div>
            <img src={item.image} />
            <div className="price">${(item.price * item.count).toFixed(2)}</div>
            <div className="count">
              <div className="quantity">{item.count}</div>
              <div className="increase" onClick={() => increaseCart(item)}>
                +
              </div>
              <div className="decrease" onClick={() => decreaseCart(item)}>
                -
              </div>
            </div>
          </div>
        );
      })}
      {total !== 0 ? (
        <div className="checkout">
          <div className="empty-the-cart" onClick={() => emptyCart()}>
            EMPTY CART
          </div>
          <div className="go-to-checkout" onClick={() => alert("CHECKOUT!")}>
            GO TO CHECKOUT
          </div>
          <div className="total">TOTAL ${total.toFixed(2)}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
