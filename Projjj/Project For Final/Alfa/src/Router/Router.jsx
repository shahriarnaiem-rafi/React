import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Shared/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Inspiration from "../pages/Inspiration";
import Gallary from "../pages/Gallary";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inspiration",
        element: <Inspiration />,
      },
      {
        path: "/gallary",
        element: <Gallary />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
