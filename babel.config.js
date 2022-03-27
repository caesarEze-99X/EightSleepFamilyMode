module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ts', '.tsx', '.json'],
				alias: {
					tests: ['./__tests__/'],
					src: './src/',
					utils: './src/utils',
				},
			},
		],
	],
};
