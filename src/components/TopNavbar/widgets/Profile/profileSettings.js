const profileSetting = [
  {
    title: "Settings",
    options: [
      {
        text: "Account Settings",
        icon: require("@assets/images/profile-setting/accountSetting.png"),
        to: "/profile/account-settings",
      },
      {
        text: "Change Password",
        icon: require("@assets/images/profile-setting/changePassword.png"),
        to: "/profile/change-password",
      },
      {
        text: "Address",
        icon: require("@assets/images/profile-setting/address.png"),
        to: "/profile/address",
      },
      {
        text: "Invoice Details",
        icon: require("@assets/images/profile-setting/invoiceDetail.png"),
        to: "/profile/invoice-details",
      },
    ],
  },
  {
    title: "Help and Feedback",
    options: [
      {
        text: "Customer Support",
        icon: require("@assets/images/profile-setting/customerSupport.png"),
      },
      { text: "FAQ", icon: require("@assets/images/profile-setting/faq.png") },
      {
        text: "Order History",
        icon: require("@assets/images/profile-setting/orderHistory.png"),
        to: "/profile/order-history",
      },
      {
        text: "Voucher",
        icon: require("@assets/images/profile-setting/voucher.png"),
      },
    ],
  },
  {
    title: "Annoucement",
    options: [
      {
        text: "Newsletter Susbcription",
        icon: require("@assets/images/profile-setting/newsletterSubscription.png"),
        to:"/profile/newsletter-subscription"
      },
      {
        text: "Product Notification",
        icon: require("@assets/images/profile-setting/productNotification.png"),
      },
    ],
  },
];

export default profileSetting;
