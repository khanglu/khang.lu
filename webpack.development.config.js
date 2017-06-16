const path = require("path");

module.exports = [
  {
    name: "client",
    target: "web",
    entry: "./src/client.jsx",
    output: {
      path: path.join(__dirname, "static"),
      filename: "client.js",
      publicPath: "/static/"
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    }
  },
  {
    name: "server",
    target: "node",
    entry: "./src/server.jsx",
    output: {
      path: path.join(__dirname, "static"),
      filename: "server.js",
      libraryTarget: "commonjs2",
      publicPath: "/static/"
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    }
  }
];
