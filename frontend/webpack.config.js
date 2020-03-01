const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devServer: {
		historyApiFallback: true,
		inline: true,
		port: 3000,
		hot: true,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	]
};
