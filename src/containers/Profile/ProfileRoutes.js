const ProfileRoutes = [
  {
    title: "Settings",
    options: [
      {
        text: "Account Settings",
        icon: require("@assets/images/profile-setting/accountSetting.png"),
        to: "/profile/settings/account-settings",
      },
      {
        text: "Change Password",
        icon: require("@assets/images/profile-setting/changePassword.png"),
        to: "/profile/settings/change-password",
      },
      {
        text: "Address",
        icon: require("@assets/images/profile-setting/address.png"),
        to: "/profile/settings/address",
      },
      {
        text: "Invoice Details",
        icon: require("@assets/images/profile-setting/invoiceDetail.png"),
        to: "/profile/settings/invoice-details",
      },
    ],
  },
  {
    title: "Help and Feedback",
    options: [
      {
        text: "Customer Support",
        icon: require("@assets/images/profile-setting/customerSupport.png"),
        to: "/profile/helpAndFeedBack/customer-support"
      },
      { 
        text: "FAQ", 
        icon: require("@assets/images/profile-setting/faq.png"),
        to: "/profile/helpAndFeedBack/faq"
      },
      {
        text: "Order History",
        icon: require("@assets/images/profile-setting/orderHistory.png"),
        to: "/profile/helpAndFeedBack/order-history",
      },
      {
        text: "Voucher",
        icon: require("@assets/images/profile-setting/voucher.png"),
        to:"/profile/helpAndFeedBack/vouchers"
      },
    ],
  },
  {
    title: "Annoucement",
    options: [
      {
        text: "Newsletter Susbcription",
        icon: require("@assets/images/profile-setting/newsletterSubscription.png"),
        to:"/profile/annoucement/newsletter-subscription"
      },
      {
        text: "Product Notification",
        icon: require("@assets/images/profile-setting/productNotification.png"),
        to:"/profile/annoucement/product-notification"
      },
    ],
  },
];

export default ProfileRoutes;
