const path = require("path");

module.exports = {
	entry: {
		// Define your entry points for your content scripts, background scripts, popup, etc
		contentScript: "./src/contentScript.js",
		background: "./src/background.js",
		// add other entry points if you have them
	},
	output: {
		path: path.resolve(__dirname, "dist"), // Output directory
		filename: "[name].bundle.js", // Output bundled file, based on entry point names
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/, // Match js and jsx files
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			// You can add more loaders here for other file types (e.g., CSS, images)
		],
	},
	resolve: {
		extensions: [".js", ".jsx"], // Resolve these extensions
	},
	// Add additional configuration such as plugins here
};
