import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";

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
        path: "/shop/:id",
        element: <h1>Item</h1>,
      },
      {
        path: "/about",
        // element: <About />,
        element: <About />,
      },
      {
        path: "/cart",
        // element: <Cart />,
        element: <h1>CART</h1>,
      },
    ],
  },
  {
    path: "/item",
    element: <div>ITEM PAGE</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
