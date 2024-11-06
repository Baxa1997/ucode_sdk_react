const path = require("path");

module.exports = {
  entry: "./src/UcodeSdk.js", // Entry file for the UcodeSdk class
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ucode_sdk.js", // Name of the bundled file
    library: "UcodeSdk", // This sets up the global variable name for browsers
    libraryTarget: "umd", // Universal Module Definition to support CommonJS, AMD, and global variable
    globalObject: "this", // Ensures compatibility across different environments (e.g., Node and browser)
  },
  mode: "production", // Optimizes the bundle for production
};
