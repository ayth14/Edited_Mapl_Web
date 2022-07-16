import React, {lazy} from "react";

const AccountSettings = lazy(() => import("@components/TopNavbar/widgets/Profile/UserSettings/AccountSettings"));
const ChangePassword = lazy(() => import("@components/TopNavbar/widgets/Profile/UserSettings/ChangePassword"));
const Address = lazy(() => import("@components/TopNavbar/widgets/Profile/UserSettings/Address"));
const InvoiceDetails = lazy(() => import("@components/TopNavbar/widgets/Profile/UserSettings/InvoiceDetails"));


const uroutes = [
{ exact: true, 
    path: "account-settings", 
    name: "account-settings", 
    element: <AccountSettings /> 
  },
  { exact: true, 
    path: "change-password", 
    name: "change-password", 
    element: <ChangePassword /> 
  },
  { exact: true, 
    path: "address", 
    name: "address", 
    element: <Address /> 
  },
  { exact: true, 
    path: "invoice-details", 
    name: "invoice-details", 
    element: <InvoiceDetails /> 
  },
]

export default uroutes;