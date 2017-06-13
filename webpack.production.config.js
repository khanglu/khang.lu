const path = require('path');
const dist = path.join(__dirname, 'dist');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
	{
		name: 'client',
		target: 'web',
		entry: './client.jsx',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'client.js',
			publicPath: '/static/',
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[hash:base64:10]',
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				}     
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					screw_ie8: true,
					drop_console: true,
					drop_debugger: true
				}
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
		]
	},
	{
		name: 'server',
		target: 'node',
		entry: './server.jsx',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: '/static/',
		},
		devtool: 'source-map',
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: "isomorphic-style-loader",
						use: [
							{
								loader: 'css-loader',
								options: {
									modules: true,
									importLoaders: 1,
									localIdentName: '[hash:base64:10]',
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader'
							}
						]
					})
				}
			],
		},
		plugins: [
			new ExtractTextPlugin({
				filename: 'styles.css',
				allChunks: true
			}),
			new OptimizeCssAssetsPlugin({
				cssProcessorOptions: { discardComments: { removeAll: true } }
			}),
			new StatsPlugin('stats.json', {
				chunkModules: true,
				modules: true,
				chunks: true,
				exclude: [/node_modules[\\\/]react/],
			}),
		]
	}
];