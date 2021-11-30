module.exports = {
  title: "Lbox",
  description: "A simple and beautiful bitcoin cash library of nodejs.",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "stylesheet", href: "/main.css" }],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
      {
        text: "accounts",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/salemkode/lbox",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/": ["", "init" , "address", "crypto"],
    },
    subSidebar: 'auto',
    logo: "/logo.svg",
    // search
    search: true,
    searchMaxSuggestions: 10,
    noFoundPageByTencent: false,
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [ 'code-switcher' ],
};
