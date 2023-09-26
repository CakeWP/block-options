const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config.js');
const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const camelCaseDash = (string) =>
	string.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());

const externals = [
	'api-fetch',
	'block-editor',
	'blocks',
	'components',
	'compose',
	'data',
	'date',
	'htmlEntities',
	'hooks',
	'edit-post',
	'element',
	'editor',
	'i18n',
	'plugins',
	'viewport',
	'ajax',
	'codeEditor',
	'rich-text',
	'primitives',
];

const globals = externals.reduce(
	(external, name) => ({
		...external,
		[`@wordpress/${name}`]: `wp.${camelCaseDash(name)}`,
	}),
	{}
);

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve(process.cwd(), 'src', 'blocks.js'),
		settings: path.resolve(process.cwd(), 'src', 'admin.js'),
		devtools: path.resolve(process.cwd(), 'src', 'devtools.js'),
		style: path.resolve(process.cwd(), 'src', 'style.scss'),
		editor: path.resolve(process.cwd(), 'src', 'editor.scss'),
		admin: path.resolve(process.cwd(), 'src', 'admin.scss'),
		'template-library-addon': path.resolve(
			process.cwd(),
			'src',
			'addons',
			'template-library',
			'index.js'
		),
		'template-library-addon-style': path.resolve(
			process.cwd(),
			'src',
			'addons',
			'template-library',
			'template-library-addon.scss'
		),

		'styles-manager-addon-admin': path.resolve(
			process.cwd(),
			'src',
			'addons',
			'styles-manager',
			'admin',
			'index.js'
		),
		'styles-manager-addon-admin-style': path.resolve(
			process.cwd(),
			'src',
			'addons',
			'styles-manager',
			'admin',
			'index.scss'
		),
		'styles-manager-addon-block': path.resolve(
			process.cwd(),
			'src',
			'addons',
			'styles-manager',
			'style-manager',
			'index.js'
		),
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
				'template-library-addon': {
					name: 'template-library-addon',
					test: /template-library-addon\.(sc|sa|c)ss/,
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
								postcssPresetEnv({
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
								}),
							],
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].build.css',
		}),
		new OptimizeCSSAssetsPlugin({
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'src/addons/styles-manager/style-manager/block.json',
					to: 'styles-manager-block.json',
				},
			],
		}),
		new IgnoreEmitPlugin([
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
			'styles-manager-addon.js.map',
			'template-library-addon.js.map',
		]),
	],
	externals: {
		...globals,
	},
};
