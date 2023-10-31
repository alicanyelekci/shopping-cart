import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <h1>HOME</h1>,
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
        element: <h1>ABOUT</h1>,
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
