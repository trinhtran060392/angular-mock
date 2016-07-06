define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function(ng, couchPotato) {

  'use strict';

  var module = ng.module('app.cfn', ['ui.router']);

  module.config(['$stateProvider', '$couchPotatoProvider', '$urlRouterProvider', 
    function ($stateProvider, $couchPotatoProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
      abstract: true,
      views: {
        'root': {
          templateUrl: 'app/cfn/views/layout.tpl.html'
        }
      }
    }).
    state('app.cfn', {
      url: '/home',
      views: {
        "content@app": {
          templateUrl: 'app/cfn/views/index_content.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
            ])
          }
        }
      }
    }).
    state('app.register', {
      url: '/register',
      views: {
        "content@app": {
          controller: 'RegisterCtrl',
          templateUrl: 'app/cfn/views/register_content.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'cfn/controllers/register-ctrl',
              'cfn/directives/input-style',
              'cfn/directives/validate'
            ])
          }
        }
      }
    })
    $urlRouterProvider.otherwise(function($injector, $location) {
      var $state = $injector.get("$state");
      $state.go('app.cfn');
    });
  }]);

  couchPotato.configureApp(module);

  module.run(function($couchPotato) {
    module.lazy = $couchPotato;
  });

  return module;
})
