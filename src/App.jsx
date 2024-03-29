import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ErrorPage from "./error-page";
import "./styles.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const cartRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setProductList(...productList, response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <ErrorPage />;
  if (loading) return <p>Loading...</p>;

  const indexFinder = (itemIndex) => {
    const index = cartList.findIndex((item) => item.id === itemIndex.id);
    return index;
  };

  const flash = () => {
    const cart = cartRef.current;

    cart.classList.add("flash");

    setTimeout(function () {
      cart.classList.remove("flash");
    }, 250);
  };

  const increaseCart = (increasedItem) => {
    const index = indexFinder(increasedItem);
    const increased = cartList.filter((item) => item.id === increasedItem.id);
    if (increased.length === 0) {
      const newObj = {
        id: increasedItem.id,
        title: increasedItem.title,
        image: increasedItem.image,
        price: increasedItem.price,
        count: 1,
      };
      setCartList((prevArray) => [...prevArray, newObj]);
    } else {
      const copiedCart = cartList.filter(
        (item) => item.id !== increasedItem.id,
      );
      increased[0].count += 1;
      const newCart = [
        ...copiedCart.slice(0, index),
        increased[0],
        ...copiedCart.slice(index),
      ];
      setCartList(newCart);
    }
    flash();
  };

  const decreaseCart = (decreasedItem) => {
    const index = indexFinder(decreasedItem);
    const decreased = cartList.filter((item) => item.id === decreasedItem.id);
    if (decreased[0].count === 1) {
      const copiedCart = cartList.filter(
        (item) => item.id !== decreasedItem.id,
      );
      setCartList(copiedCart);
    } else {
      const copiedCart = cartList.filter(
        (item) => item.id !== decreasedItem.id,
      );
      decreased[0].count -= 1;
      const newCart = [
        ...copiedCart.slice(0, index),
        decreased[0],
        ...copiedCart.slice(index),
      ];
      setCartList(newCart);
    }
  };

  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <>
      <Header cartRef={cartRef} />
      <Outlet
        context={{
          productList: productList,
          increaseCart: increaseCart,
          decreaseCart: decreaseCart,
          emptyCart: emptyCart,
          cartList: cartList,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
