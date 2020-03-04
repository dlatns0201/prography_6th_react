const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	target: 'node',
	node: false,
	entry: {
		server: './src/server.tsx'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		chunkFilename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['awesome-typescript-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx']
	},
	externals: [nodeExternals()]
};
