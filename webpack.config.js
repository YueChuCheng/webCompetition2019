const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
let htmlPages = ['index','intro'];

let htmlPlugins = htmlPages.map(page => 
   new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `assets/${page}.html`,
      //favicon: 'assets/images/favicon.ico'
   })
);
module.exports = {
    entry:'./assets/js/script.js',
    output:{
        path:path.join(__dirname,"./dist"),
        filename:'bundle[chunkhash].js',
        //publicPath:'/'
    },
    module:{
        rules:[{
            test:/\.(js)$/,
            exclude:/(node_modules)/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
        {
            
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                   loader: 'css-loader',
                   options: {
                      url: false
                   }
                }, {
                   loader: 'postcss-loader'
                }]
             })
            
         },
    {
        test:/\.(jpe?g|png|gif|svg)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit:400,
                    outputPath:'./images'
                }
            },
            'image-webpack-loader'
        ]
    }
    ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.[hash].css'),
        ...htmlPlugins
     ],
}