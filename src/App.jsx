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
    let cartProducts = productList.map((item) => {
      return { id: item.id, quantity: 0 };
    });
    setCartList(...cartList, cartProducts);
  }, [productList]);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  if (error) return <ErrorPage />;
  if (loading) return <p>Loading...</p>;

  const handleCart = () => {
    console.log(cartList);
  };

  return (
    <>
      <Header />
      <Outlet context={{ productList: productList, handleCart: handleCart }} />
      <Footer />
    </>
  );
}

export default App;
