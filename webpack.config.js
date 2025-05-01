const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development", // or "production" 
    entry: "./src/index.js",  // Where Webpack starts bundling 

    output: {

        path: path.resolve(__dirname, "dist"), // Output folder 

        filename: "bundle.js",
        clean: true,                // Output file name

    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    module: {

        rules: [ // How to handle different types of files 

            {

                test: /\.css$/i,      // If file ends in .css 

                use: ["style-loader", "css-loader"], // Use these loaders 


            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },

        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],



};

