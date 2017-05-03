'use strict'

var webpack = require('webpack')

module.exports = {
	context: path.resolve(__dirname, '..'),
	devtool: 'cheap-module-source-map',
	entry: [
		require.resolve('webpack-dev-server/client') + '?/',
		require.resolve('webpack/hot/dev-server'),
		'./src/index.tsx',
	],
	resolve: {
		extensions : ['', '.js', '.ts', '.tsx', '.jsx'],
	},
	loaders: [
		{
			exclude: [
				/\.html$/,
				// We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
				// because you might change the hot reloading server from the custom one
				// to Webpack's built-in webpack-dev-server/client?/, which would not
				// get properly excluded by /\.(js|jsx)$/ because of the query string.
				// Webpack 2 fixes this, but for now we include this hack.
				// https://github.com/facebookincubator/create-react-app/issues/1713
				/\.(js|jsx)(\?.*)?$/,
				/\.(ts|tsx)(\?.*)?$/,
				/\.css$/,
				/\.json$/,
				/\.svg$/
			],
			loader: 'url',
			query: {
				limit: 10000,
				name: 'static/media/[name].[hash:8].[ext]'
			}
		},
		{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
	],
	output: {
		path: 'build',
		pathinfo: true,
		filename: 'static/js/bundle.js',
		publicPath: '/',
	}
}
