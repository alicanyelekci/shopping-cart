import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ErrorPage from "./error-page";
import "./styles.css";

import { useState, useEffect } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    console.log("cartlist", cartList);
  }, [cartList]);

  if (error) return <ErrorPage />;
  if (loading) return <p>Loading...</p>;

  const handleCart = (addedItem) => {
    const added = cartList.filter((item) => item.id === addedItem.id);
    if (added.length === 0) {
      const newObj = {
        id: addedItem.id,
        title: addedItem.title,
        image: addedItem.image,
        price: addedItem.price,
        count: 1,
      }; // Replace this with your actual object
      setCartList((prevArray) => [...prevArray, newObj]);
    } else {
      const copiedCart = cartList.filter((item) => item.id !== addedItem.id);
      added[0].count += 1;
      const newCart = copiedCart.concat(added[0]);
      setCartList(newCart);
    }
  };

  return (
    <>
      <Header />
      <Outlet
        context={{
          productList: productList,
          handleCart: handleCart,
          cartList: cartList,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
