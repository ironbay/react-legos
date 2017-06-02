'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, '..'),
	devtool: 'source-map',
	entry: [
		// require.resolve('webpack-dev-server/client') + '?/',
		// require.resolve('webpack/hot/dev-server'),
		'./src/index.tsx',
	],
	output: {
		path: path.join(__dirname, '../build'),
		pathinfo: true,
		filename: 'static/js/[name].[chunkhash:8].js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			inject: 'body',
			hash: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					require('postcss-import')({
						addDependencyTo: webpack,
					}),
					require('postcss-cssnext'),
				],
			},
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true, // React doesn't support IE8
				warnings: false,
			},
			mangle: {
				screw_ie8: true,
			},
			output: {
				comments: false,
				screw_ie8: true,
			},
		}),
		new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
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
				],
				loader: 'url',
				query: {
					limit: 10000,
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.css?$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?importLoaders=1!postcss-loader',
				}),
			},
		],
	},

}
