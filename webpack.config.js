const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'public'),
        filename: 'js/bundle.js',
        //filename: 'js/bundle.[contenthash].js', //use contenthash for versioning/cache
    },
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            //TYPESCRIPT LOADER
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include:[path.resolve(__dirname,'src')]
            },
            //BABEL-LOADER 
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            //SASS-LOADER
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    devServer: {
        static:'./src'
    },
    plugins: [new HtmlWebpackPlugin({
        title:'Webpack sample app',
        filename: 'index.html'
    })],
}