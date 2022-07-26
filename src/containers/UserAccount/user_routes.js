import React, { lazy } from "react";

const Vouchers = lazy(() =>
  import("@components/TopNavbar/widgets/Profile/HelpAndFeedBack/Vouchers")
);
const AccountSettings = lazy(() =>
  import("@components/TopNavbar/widgets/Profile/UserSettings/AccountSettings")
);
const ChangePassword = lazy(() =>
  import("@components/TopNavbar/widgets/Profile/UserSettings/ChangePassword")
);
const Address = lazy(() =>
  import("../../components/TopNavbar/widgets/Profile/UserSettings/Address")
);
const InvoiceDetails = lazy(() =>
  import("@components/TopNavbar/widgets/Profile/UserSettings/InvoiceDetails")
);

const OrderHistory = lazy(()=>
import("@components/TopNavbar/widgets/Profile/HelpAndFeedBack/OrderHistory")
)

const NewsLetterSubscription = lazy(()=>
import('@components/TopNavbar/widgets/Profile/Annoucement/NewsLetterSubscription')
)

const ProductNotification = lazy(()=>
import('@components/TopNavbar/widgets/Profile/Annoucement/ProductNotification')
)

const AddNewAddress = lazy(()=>
import('@components/TopNavbar/widgets/Profile/UserSettings/Address/AddNewAddress'))

const EditAdress = lazy(()=>
import('@components/TopNavbar/widgets/Profile/UserSettings/Address/EditAdress')
)

const ProductDetail = lazy(() =>
  import(
    "@components/TopNavbar/widgets/Profile/Annoucement/ProductNotification/ProductDetail"
  )
);



const user_routes = [
  {
    exact: true,
    path: "vouchers",
    name: "vouchers",
    element: <Vouchers />,
  },
  {
    exact: true,
    path: "account-settings",
    name: "account-settings",
    element: <AccountSettings />,
  },
  {
    exact: true,
    path: "change-password",
    name: "change-password",
    element: <ChangePassword />,
  },
  {
    exact: true,
    path: "address",
    name: "address",
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
    path: "invoice-details",
    name: "invoice-details",
    element: <InvoiceDetails />,
  },
  {
    exact: true,
    path: "order-history",
    name: "order-history",
    element: <OrderHistory />,
  },
  {
    exact: true,
    path: "newsletter-subscription",
    name: "newsletter-subscription",
    element: <NewsLetterSubscription />,
  },
  {
    exact: true,
    path: "product-notification",
    name: "product-notification",
    element: <ProductNotification />,
  },
  {
    exact: true,
    path: "/product-detail",
    name: "product-detail",
    element: <ProductDetail />,
  },
];

export default user_routes;
