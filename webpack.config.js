const isProduction = process.env.NODE_ENV === "production";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
	filename: "/build.css?"
});

module.exports = {
	entry: {
		styles: ["./init.scss"]
	},
	output: {
		filename: "build.css"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: ["css-loader", "sass-loader"]
				})
			}
		]
	},
	plugins: [extractPlugin]
};
