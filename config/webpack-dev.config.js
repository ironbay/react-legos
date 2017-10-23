'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, '..'),
	devtool: 'eval',
	entry: [
		// require.resolve('webpack-dev-server/client') + '?/',
		// require.resolve('webpack/hot/dev-server'),
		'babel-polyfill',
		'react-hot-loader/patch',
		'./src/index.tsx',
	],
	output: {
		path: path.join(__dirname, '../build'),
		pathinfo: true,
		filename: 'static/js/bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
	},
	plugins: [
		new webpack.ProvidePlugin({
			Promise: 'es6-promise-promise'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('dev')
			}
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			inject: 'body',
			hash: true,
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					require('postcss-import')({
						addDependencyTo: webpack,
					}),
					require('postcss-cssnext')({
						browsers: ['> 0%', 'IE 9'],
					}),
				],
			},
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		loaders: [
			{
				exclude: [
					/\.html$/,
					/\.(js|jsx)(\?.*)?$/,
					/\.(ts|tsx)(\?.*)?$/,
					/\.css$/,
					/\.json$/,
					/\.svg$/,
					/\.jpg$/,
					/\.png$/,
				],
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			{
				test: /\.tsx?$/,
				loaders: [
					'react-hot-loader/webpack',
					'awesome-typescript-loader',
				],
			},
			{ test: /\.css?$/, loader: 'style-loader!css-loader?importLoaders=1!postcss-loader' },
		],
	},
	devServer: {
		hot: true,
		disableHostCheck: true,
		historyApiFallback: {
			index: '/'
		},
	},
}
