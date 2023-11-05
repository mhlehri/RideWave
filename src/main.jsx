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
import { SignUp } from "./Pages/Signup/Signup.jsx";
import SignleService from "./Pages/SignleService/SignleService.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Manage_Services from "./Pages/Manage-Services Page/Manage_Services";
import My_schedule from "./Pages/My-schedule Page/My_schedule";
import createService from "./Pages/Add-A-Service Page/Add_Service.jsx";

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
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/servicesid",
        element: (
          <PrivateRoute>
            <SignleService></SignleService>
          </PrivateRoute>
        ),
      },
      {
        path: "/Manage Services",
        element: (
          <PrivateRoute>
            <Manage_Services></Manage_Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/My Schedules",
        element: (
          <PrivateRoute>
            <My_schedule></My_schedule>
          </PrivateRoute>
        ),
      },
      {
        path: "/Add Services",
        element: (
          <PrivateRoute>
            <createService></createService>
          </PrivateRoute>
        ),
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
