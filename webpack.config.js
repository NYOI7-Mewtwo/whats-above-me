const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config()

module.exports = {
  entry: './client/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    hot: true,
    historyApiFallback: true,
    compress: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults',
                },
              ],
              [
                '@babel/preset-react',
                {
                  targets: 'defaults',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            // creates style nodes from JS strings - ORDER MATTERS!
            // these loaders are used in backwards order
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/',
                }
            }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      apiUrl: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API}&libraries=places`
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
};
