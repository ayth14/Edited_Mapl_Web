import React, { lazy } from "react";

const AccountSettings = lazy(() => import("../Settings/AccountSettings"));
const ChangePassword = lazy(() => import("../Settings/ChangePassword"));
const Address = lazy(() => import("../Settings/Address"));
const InvoiceDetails = lazy(() => import("../Settings/InvoiceDetails"));
const CustomerSupport = lazy(() => import("../HelpAndFeedBack/CustomerSupport"));
const Faq = lazy(() => import("../HelpAndFeedBack/Faq"));
const OrderHistory = lazy(() => import("../HelpAndFeedBack/OrderHistory"));
const Vouchers = lazy(() => import("../HelpAndFeedBack/Vouchers"));
const NewsLetterSubscription = lazy(() => import("../Annoucement/NewsLetterSubscription"));
const ProductNotification = lazy(() => import("../Annoucement/ProductNotification"));
const AddNewAddress = lazy(() => import("../Settings/Address/AddNewAddress"));
const EditAdress = lazy(() => import("../Settings/Address/EditAdress"));
const ProductDetail = lazy(() =>import("../Annoucement/ProductNotification/ProductDetail"));

const user_routes = [
  {
    exact: true,
    path: "settings/account-settings",
    name: "settings/account-settings",
    element: <AccountSettings />,
  },
  {
    exact: true,
    path: "settings/change-password",
    name: "settings/change-password",
    element: <ChangePassword />,
  },
  {
    exact: true,
    path: "settings/address",
    name: "settings/address",
    element: <Address />,
  },
  {
    exact: true,
    path: "add-new-address",
    name: "add-new-address",
    element: <AddNewAddress />,
  },
  {
    exact: true,
    path: "edit-address",
    name: "edit-address",
    element: <EditAdress />,
  },
  {
    exact: true,
    path: "settings/invoice-details",
    name: "settings/invoice-details",
    element: <InvoiceDetails />,
  },
  {
    exact: true,
    path: "helpAndFeedBack/customer-support",
    name: "helpAndFeedBack/customer-support",
    element: <CustomerSupport />,
  },
  {
    exact: true,
    path: "helpAndFeedBack/faq",
    name: "helpAndFeedBack/faq",
    element: <Faq />,
  },
  {
    exact: true,
    path: "helpAndFeedBack/order-history",
    name: "helpAndFeedBack/order-history",
    element: <OrderHistory />,
  },
  {
    exact: true,
    path: "helpAndFeedBack/vouchers",
    name: "helpAndFeedBack/vouchers",
    element: <Vouchers />,
  },
  {
    exact: true,
    path: "annoucement/newsletter-subscription",
    name: "annoucement/newsletter-subscription",
    element: <NewsLetterSubscription />,
  },
  {
    exact: true,
    path: "annoucement/product-notification",
    name: "annoucement/product-notification",
    element: <ProductNotification />,
  },
  {
    exact: true,
    path: "annoucement/productNotification/product-detail",
    name: "annoucement/productNotification/product-detail",
    element: <ProductDetail />,
  },
];

export default user_routes;