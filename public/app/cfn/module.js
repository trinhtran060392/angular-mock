define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function(ng, couchPotato) {

  'use strict';

  var module = ng.module('app.cfn', ['ui.router']);

  module.config(function($stateProvider, $couchPotatoProvider) {
    $stateProvider
      .state('app.cfn', {
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
      }).state('app.register', {
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
  });

  couchPotato.configureApp(module);

  module.run(function($couchPotato) {
    module.lazy = $couchPotato;
  });

  return module;
})
