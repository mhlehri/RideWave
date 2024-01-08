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
import Add_Service from "./Pages/Add-A-Service Page/Add_Service.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateService from "./Pages/Update-Service Page/UpdateService.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import FaqPage from "./Pages/Faq/Faq";
AOS.init();
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
        loader: () => fetch("https://server-nu-umber.vercel.app/services"),
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
        path: "/ass/:id",
        element: (
          <PrivateRoute>
            <SignleService></SignleService>
          </PrivateRoute>
        ),
      },
      {
        path: "/ManageServices",
        element: (
          <PrivateRoute>
            <Manage_Services></Manage_Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/MySchedules",
        element: (
          <PrivateRoute>
            <My_schedule></My_schedule>
          </PrivateRoute>
        ),
      },
      {
        path: "/Update/:id",
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
      },
      {
        path: "/AddServices",
        element: (
          <PrivateRoute>
            <Add_Service></Add_Service>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/:user",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
