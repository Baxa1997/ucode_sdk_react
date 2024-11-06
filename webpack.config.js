const path = require("path");

module.exports = {
  entry: "./src/sdk.js", // Set this to your main entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ucode_sdk.js",
    library: "UcodeSdk", // This sets the name of the global variable users will access
    libraryTarget: "umd", // Universal Module Definition, makes it work in Node.js and browser
    globalObject: "this", // Ensures compatibility across different environments
  },
  mode: "production", // Minifies the output for production
};
