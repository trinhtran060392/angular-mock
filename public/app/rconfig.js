var require = {
  waitSeconds: 0,
  paths: {
		'jquery': '../plugin/jquery/dist/jquery',
    'bootstrap': '../plugin/bootstrap/dist/js/bootstrap',
		'angular': '../plugin/angular/angular.min',
		'angular-couch-potato': '../plugin/angular-couch-potato/dist/angular-couch-potato',
		'angular-ui-router': '../plugin/angular-ui-router/release/angular-ui-router.min',
		'domReady': '../plugin/requirejs-domready/domReady'
  },
  shim: {
  	'angular': {'exports': 'angular', deps: ['jquery']},

		'bootstrap': { deps: ['jquery']},
    'angular-couch-potato': { deps: ['angular'] },
    'angular-ui-router': { deps: ['angular'] }
  },
  priority: [
    'jquery',
    'bootstrap',
    'angular'
  ]
};
