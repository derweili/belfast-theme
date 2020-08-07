const pkg = require('./package.json');

const globImporter = require('node-sass-glob-importer');

/**
 * Add node-sass-glob-importer to exsting webpack configuration
 * 
 * @param {*} config 
 * @param {*} merge 
 * @param {*} appDir 
 * @param {*} isDev 
 */
const addNodeSassGlobImporter = (config, merge, appDir, isDev) => {
	// Create a new config
	const newConfig = { ...config };

	/**
	 * Get rule and use index of the loader
	 */
	let sassRuleIndex = null;
	let sassUseIndex = null;
	
	for (let ruleIndex = 0; ruleIndex < newConfig.module.rules.length; ruleIndex++) {
		
		const rule = newConfig.module.rules[ruleIndex];

		for (let useIndex = 0; useIndex < rule.use.length; useIndex++) {
			if( rule.use[useIndex].loader.includes('sass-loader') ) {
				sassRuleIndex = ruleIndex;
				sassUseIndex = useIndex;

				break;
			}
		}
		
		if(sassRuleIndex !== null ) break;
	}
	
	// add new sassOptions object to the sass-loader options
	newConfig.module.rules[sassRuleIndex].use[sassUseIndex].options.sassOptions = {};
	newConfig.module.rules[sassRuleIndex].use[sassUseIndex].options.sassOptions.importer = globImporter();
	
	return newConfig;
}

module.exports = {
	// Project Identity
	appName: 'derweiliWordPressStarterTheme', // Unique name of your project
	type: 'theme', // Plugin or theme
	slug: 'derweili-wordpress-starter-theme', // Plugin or Theme slug, basically the directory name under `wp-content/<themes|plugins>`
	// Used to generate banners on top of compiled stuff
	bannerConfig: {
		name: 'derweiliWordPressStarterTheme',
		author: 'derweili <jw@derweili.de>',
		license: 'GPL-2.0+',
		link: 'GPL-2.0+',
		version: pkg.version,
		copyrightText:
			'This software is released under the GPL-2.0+ License\nhttps://opensource.org/licenses/GPL-2.0+',
		credit: true,
	},
	// Files we need to compile, and where to put
	files: [
		// If this has length === 1, then single compiler
		{
			name: 'app',
			entry: {
				// mention each non-interdependent files as entry points
		     // The keys of the object will be used to generate filenames
		     // The values can be string or Array of strings (string|string[])
		     // But unlike webpack itself, it can not be anything else
		     // <https://webpack.js.org/concepts/#entry>
		     // You do not need to worry about file-size, because we would do
		     // code splitting automatically. When using ES6 modules, forget
		     // global namespace pollutions 😉
				// vendor: './src/mobile/vendor.js', // Could be a string
				main: [
					'./resources/js/app.js',
				], // Or an array of string (string[])
				editor: [
					'./resources/js/editor.js',
				], // Or an array of string (string[])
			},
			/**
			 * Extend webpack configuration to support node-sass-glob-importer
			 */
			webpackConfig: addNodeSassGlobImporter
		},
		// If has more length, then multi-compiler
	],
	// Output path relative to the context directory
	// We need relative path here, else, we can not map to publicPath
	outputPath: 'dist',
	// Project specific config
	// Needs react(jsx)?
	hasReact: true,
	// Needs sass?
	hasSass: true,
	// Needs less?
	hasLess: false,
	// Needs flowtype?
	hasFlow: false,
	// Externals
	// <https://webpack.js.org/configuration/externals/>
	externals: {
		jquery: 'jQuery',
	},
	// Webpack Aliases
	// <https://webpack.js.org/configuration/resolve/#resolve-alias>
	alias: undefined,
	// Show overlay on development
	errorOverlay: true,
	// Auto optimization by webpack
	// Split all common chunks with default config
	// <https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks>
	// Won't hurt because we use PHP to automate loading
	optimizeSplitChunks: true,
	// Usually PHP and other files to watch and reload when changed
	watch: './**/*.php',
	// Files that you want to copy to your ultimate theme/plugin package
	// Supports glob matching from minimatch
	// @link <https://github.com/isaacs/minimatch#usage>
	packageFiles: [
		'inc/**',
		'vendor/**',
		'dist/**',
		'*.php',
		'*.md',
		'readme.txt',
		'languages/**',
		'layouts/**',
		'LICENSE',
		'*.css',
	],
	// Path to package directory, relative to the root
	packageDirPath: 'package',
};
