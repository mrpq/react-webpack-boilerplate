exports.loadJS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        include,
        exclude,
        use: ["babel-loader"]
      }
    ]
  }
});
