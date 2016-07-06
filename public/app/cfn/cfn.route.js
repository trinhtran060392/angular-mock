'use strict';

angular.module('app.cfn', ['ui.router']).config(config);

function config($stateProvider) {

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
        templateUrl: 'app/cfn/views/index_content.html'
      }
    }
  }).
  state('app.register', {
    url: '/register',
    views: {
      "content@app": {
        controller: 'RegisterCtrl',
        templateUrl: 'app/cfn/views/register_content.html'
      }
    }
  })
}
