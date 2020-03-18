const withCSS = require("@zeit/next-css");
if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
  require.extensions[".css"] = (file) => {};
}

const config = {
  target: 'serverless',
  dontAutoRegisterSw: false,
  generateSw: true,
  devSwSrc: 'src/public/sw.js',
  workboxOpts: {
    swSrc: 'src/public/sw.js',
    swDest: 'src/public/service-worker.js'
  }
}

module.exports = withCSS(config)
