const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // This is the default naming format for the output files
              outputPath: 'images', // This is the directory where the images will be stored in the output folder
            },
          },
        ],
      },
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    host: 'localhost',
    port: "8080",
    open: true,
    hot: true,
    liveReload: true,
    static: {
      publicPath: "/public",
      directory: path.resolve(__dirname, 'public')
    },
    proxy: {
      '/': 'http://localhost:3000'
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};


