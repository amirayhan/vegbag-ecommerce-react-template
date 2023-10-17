import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import ViewCart from "./components/ViewCart/ViewCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("categories.json"),
            },
            {
                path: "/viewcart",
                element: <ViewCart></ViewCart>,
            },
            {
                path: "checkout",
                element: <Checkout></Checkout>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
