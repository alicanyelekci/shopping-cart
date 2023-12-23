import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cartList, increaseCart, decreaseCart, emptyCart } =
    useOutletContext();

  const total = cartList.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <div className="cart-container">
      {total === 0 ? (
        <div className="empty-cart" onClick={() => emptyCart()}>
          Looks like your cart is empty!
        </div>
      ) : (
        <></>
      )}
      {cartList.map((item) => {
        return (
          <div key={item.id} className="cart-item">
            <div className="title">{item.title}</div>
            <img src={item.image} />
            <div className="price">${item.price}</div>
            <div className="count">
              <div className="quantity">{item.count}</div>
              <div className="increase" onClick={() => increaseCart(item)}>
                +
              </div>
              {item.count === 1 ? (
                <div className="decrease" onClick={() => decreaseCart(item)}>
                  Remove
                </div>
              ) : (
                <div className="decrease" onClick={() => decreaseCart(item)}>
                  -
                </div>
              )}
            </div>
            <div className="subtotal">
              Subtotal = ${(item.price * item.count).toFixed(2)}
            </div>
          </div>
        );
      })}
      {total !== 0 ? <div>TOTAL = ${total.toFixed(2)}</div> : <></>}
      {total !== 0 ? <div>CHECKOUT</div> : <></>}
    </div>
  );
}
