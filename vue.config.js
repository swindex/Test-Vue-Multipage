// vue.config.js
module.exports = {
	// disable hashes in filenames
	filenameHashing: false,
	lintOnSave: false,
	pages:{
		dashboard:{
			filename:"dashboard.html",
			entry:"src/pages/dashboard/dashboard.js",
			template:"src/pages/dashboard/dashboard.html",
		},

		/**
		 * Example of using a template
		 */
		workqueues:{
			filename:"workqueues.html",
			entry:"src/pages/workqueues/workqueues.js",
			template:"smarty-templates/workqueues.tpl",
		}
	}
}