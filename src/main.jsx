import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
import Services from "./Pages/Services/Services.jsx";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import { SignIn } from "./Pages/Signin/Signin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
