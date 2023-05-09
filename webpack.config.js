const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const path = require( 'path' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve( process.cwd(), 'src', 'blocks.js' ),
		settings: path.resolve( process.cwd(), 'src', 'admin.js' ),
		devtools: path.resolve( process.cwd(), 'src', 'devtools.js' ),
		style: path.resolve( process.cwd(), 'src', 'style.scss' ),
		editor: path.resolve( process.cwd(), 'src', 'editor.scss' ),
		admin: path.resolve( process.cwd(), 'src', 'admin.scss' ),
	},
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			cacheGroups: {
				editor: {
					name: 'editor',
					test: /editor\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				style: {
					name: 'style',
					test: /style\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				admin: {
					name: 'admin',
					test: /admin\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				default: false,
			},
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(sc|sa|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								postcssPresetEnv( {
									stage: 3,
									features: {
										'custom-media-queries': {
											preserve: false,
										},
										'custom-properties': {
											preserve: true,
										},
										'nesting-rules': true,
									},
								} ),
							],
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin( {
			filename: '[name].build.css',
		} ),
		new OptimizeCSSAssetsPlugin( {
			cssProcessorPluginOptions: {
				preset: [ 'default', { discardComments: { removeAll: true } } ],
			},
		} ),
		new IgnoreEmitPlugin( [
			'editor.js',
			'style.js',
			'index.deps.json',
			'editor.deps.json',
			'style.deps.json',
			'admin.deps.json',
			'index.js.map',
			'admin.js.map',
			'settings.js.map',
			'devtools.js.map',
			'editor.build.css.map',
			'style.build.css.map',
			'admin.build.css.map',
		] ),
	],
};
