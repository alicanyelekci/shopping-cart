import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <Home />,
      },
      {
        path: "/shop",
        // element: <Shop />,
        element: <Shop />,
      },
      {
        path: "/shop/:itemId",
        element: <Item />,
      },
      {
        path: "/about",
        // element: <About />,
        element: <About />,
      },
      {
        path: "/cart",
        // element: <Cart />,
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
