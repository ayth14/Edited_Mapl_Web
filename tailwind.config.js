module.exports = {
  content: ["./src/**/*.{html,js,css,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",

      xs: "320px",

      md: "567px",

      lg: "768px",

      xl: "1024px",

      "2xl": "1200px",
      
      "4xl": "1440px",
    },
    extend: {
      backgroundImage: {
        AuthBackground: 'url("@assets/images/background.png")',
        BgOverlay: 'url("@assets/images/overlay.png")',
        mainBanner: 'url("@assets/images/group-4.png")',
        trending: 'url("@assets/images/trendingBanner.png")',
      },
      colors: {
        color172: "rgb(172,172,172)",
        color236: "rgb(236,236,236)",
        color239: "rgb(239,239,239)",
        color206: "rgb(206,206,206)",
        color207: "rgb(207,207,207)",
        color235: "rgb(235,235,235)",
        color232: "rgb(232,232,232)",
        color102: "rgb(102,102,102)",
        color64 : "rgb(64,64,64)",
        color456: "rgb(46,56,66)",
        color139 : "rgb(139,139,139)",
        color112 : "rgb(112 112 112)",
        blue: 'rgb(0,93,255)',
        color74 : "rgb(74, 74, 74)",
        borderColor: "rgb(172,172,172)",
        headerBack: "rgb(46,56,66)",
        footerText: "rgb(48,47,47)",
        button: "rgb(251,251,251)",
        b2bButton: "rgb(211,206,210)",
        asideBarBgColor: "rgb(251,251,253)",
        maplsite: "rgb(155,4,191)",
        borderLine: "rgb(0,0,0, 0.24)",
        logoColor: "rgb(239 39 44)",
        linkColor: "rgb(8, 82, 178)",
      },
      boxShadow: {
        "3xl": "0 2px 17px 0 rgba(14, 12, 29, 0.13)",
        headerShadow: "0 2px 6px 0 rgb(14 12 29 / 4%)",
        cartBtn: "0 3px 6px 0 rgb(0, 0, 0, 0.16)",
      },
      fontFamily: {
        sm: "Source Sans, sans-serif",
        openSans: "Open Sans, sans-serif",
        raleway: "Raleway, sans-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
