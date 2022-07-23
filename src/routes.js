import React, { lazy } from "react";

const Login = lazy(() => import("@containers/Auth/Login"));
const Registration = lazy(() => import("@containers/Auth/Registration"));
const ConfirmRegistration = lazy(() => import("@containers/Auth/ConfirmRegistration"));
const BussinessRegistration = lazy(() => import("@containers/Auth/BussinessRegistration"));
const ConfirmBusinessRegistration = lazy(() => import("@containers/Auth/ConfirmBussinessRegistration"));
const Home = lazy(() => import("@containers/Home"));
const ErrorPage = lazy(() => import("@containers/ErrorPage"));
const GoogleMap = lazy(() => import("@containers/GoogleMapScreen"));
const Products = lazy(() => import("@containers/Products"));
const ProductDetail = lazy(() => import("@containers/ProductDetail"));
const UserAccount = lazy(() => import("@containers/UserAccount"));
const Wishlist = lazy(() => import("@containers/Wishlist"));
const Cart = lazy(() => import("@containers/Cart"));
const Checkout = lazy(() => import("@containers/Checkout"));

const routes = [
  { exact: true, 
    path: "/", 
    name: "Login", 
    element: <Login /> 
  },
  {
    exact: true,
    path: "/registration",
    name: "Registration",
    element: <Registration />,
  },
  {
    exact: true,
    path: "/confirmRegistration",
    name: "ConfirmRegistration",
    element: <ConfirmRegistration />,
  },
  {
    exact: true,
    path: "/confirmBusinessRegistration",
    name: "ConfirmBusinessRegistration",
    element: <ConfirmBusinessRegistration />,
  },
  {
    exact: true,
    path: "/bussinessRegistration",
    name: "BussinessRegistration",
    element: <BussinessRegistration />,
  },
  { exact: true, 
    path: "/home", 
    name: "home", 
    element: <Home /> 
  },
  {
    exact: true,
    path: "/errorPage",
    name: "ErrorPage",
    element: <ErrorPage />,
  },
  { exact: true, 
    path: "/products", 
    name: "ErrorPage", 
    element: <Products /> 
  },
  {
    exact: true,
    path: "/product",
    name: "ErrorPage",
    element: <ProductDetail />,
  },
  { exact: true, 
    path: "/googleMap", 
    name: "GooleMap", 
    element: <GoogleMap /> 
  },
  { exact: true, 
    path: "/profile/*", 
    name: "profile", 
    element: <UserAccount/> 
  },
  { exact: true, 
    path: "/wishlist", 
    name: "wishlist", 
    element: <Wishlist/> 
  },
  { exact: true, 
    path: "/cart", 
    name: "cart", 
    element: <Cart/> 
  },
  { exact: true, 
    path: "/checkout", 
    name: "checkout", 
    element: <Checkout/> 
  },
];

export default routes;
