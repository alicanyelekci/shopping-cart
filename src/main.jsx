import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //   errorElement: <ErrorPage />,
    //   children: [
    //     {
    //       path: "contacts/:contactId",
    //       element: <Contact />,
    //     },
    //   ],
    // },
    // {
    //   path: "contacts/:contactId",
    //   element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
