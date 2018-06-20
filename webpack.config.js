var path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	},
	module: {
		rules: [
			{
				loaders: 'babel-loader',
				options: {
					presets: [
						'env']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}
