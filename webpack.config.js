const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
	},
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.scss/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]',
							sourceMap: true
						}
					},

					{
					    loader: 'postcss-loader',
					    options: {
					        plugins: [
					            autoprefixer({
					                browsers:['ie >= 8', 'last 4 version']
					            })
					        ],
					        sourceMap: true
					    }
					},

					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
				]
			},
            {
                test: /\.css$/,
                use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					}
				]
            },
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					},
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './public/index.html'}),
		new MiniCssExtractPlugin({
        	filename: '[name].css'
    	})
	]
}
