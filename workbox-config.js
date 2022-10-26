module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,scss,jfif,html,png,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};