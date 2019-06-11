const path = require('path');

 module.exports = {
	 mode: 'development',
	 	entry: './index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'output.bundle.js',
		},
	 module: {
		 rules: [
			 {
				 test: /\.(m?js|jsx)$/,
				 exclude: /(node_modules|bower_components)/,
				 use: {
					 loader: 'babel-loader',
					 options: {
						 presets: ['@babel/preset-env'],
						 plugins: ['@babel/plugin-transform-react-jsx']
					 }
				 }
			 }
		 ]
	 }
 }