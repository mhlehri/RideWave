import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
