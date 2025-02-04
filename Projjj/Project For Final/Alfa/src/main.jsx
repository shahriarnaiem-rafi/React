import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <LoginProvider>
      <RouterProvider router={Router} />
      </LoginProvider>
  </StrictMode>
);
