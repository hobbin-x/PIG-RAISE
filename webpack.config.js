const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
		devServer: {
			inline: true,
			port: 8000,
			host: "0.0.0.0",
			// compress: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react'],
                    }
                },
                exclude: /node_modules/
            }, 
						{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
						}
        ]
    },
		plugins: [
     	// new webpack.HotModuleReplacementPlugin(), //热加载插件
  	],
};