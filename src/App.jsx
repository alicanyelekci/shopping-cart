import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./error-page";

import { useState, useEffect } from "react";

function App() {
  const [productList, setProductList] = useState([]);
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

  if (error) return <ErrorPage />;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
