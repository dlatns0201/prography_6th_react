const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`;

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: [hotMiddlewareScript, './src/index.tsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/'
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
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
