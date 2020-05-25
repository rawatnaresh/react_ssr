const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
const browserConfig = {
    entry: "./src/browser/index.js",
    output: {
        path: __dirname,
        filename:"./build/bundle.js",
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "./build/assets",
                    publicPath: url => `/assets/${url}`
                  }
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }, 
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader',  /* options: { modules: true, importLoaders: 1 } */ }, 
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //       ident: 'postcss',
                    //       plugins: [
                    //         require('autoprefixer')(),
                    //       ]
                    //     }
                    //   },
                ],

            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "build/css/[name].css"
        })
    ]
};
const serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: "server-build/bundle-server.js",
        libraryTarget: "commonjs2",
    },
    devtool: "cheap-module-source-map",
    module:{
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "./build/assets",
                    publicPath: url => `/assets/${url}`,
                    emit: false
                  }
            },
            {
                test: /\.css$/,
                use: [ 
                    { loader: 'css-loader'},
                ],

            },
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    },
};

module.exports = [ browserConfig, serverConfig ];