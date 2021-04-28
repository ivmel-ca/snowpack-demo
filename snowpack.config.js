// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: { url: "/", static: true },
    src: { url: "/dist" }
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-babel",
    "@snowpack/plugin-sass",
    ["snowpack-plugin-svgr", { exclude: "*/**/node_modules" }]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  }
};
