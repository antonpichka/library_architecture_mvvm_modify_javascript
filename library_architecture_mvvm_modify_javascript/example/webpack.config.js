module.exports = {
    mode: "development",
    entry: {
      index: "./public/index.js",
      other: "./public/other.js"
    },
    output: {
      filename: "[name].js",
      path: __dirname + "/dist/",
    },
};