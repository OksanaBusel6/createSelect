const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
            test: /\.s[ac]ss$/i,
            use: [
              // fallback to style-loader in development
              process.env.NODE_ENV !== "production"
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'}
          }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
