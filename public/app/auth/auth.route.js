'use strict';

angular.module('app.auth', ['ui.router']).config(config);

function config($stateProvider) {

  $stateProvider
  .state('app', {
    abstract: true,
    views: {
      'root': {
        templateUrl: 'app/auth/views/layout.tpl.html'
      }
    }
  }).
  state('app.auth', {
    url: '/home',
    views: {
      "content@app": {
        templateUrl: 'app/auth/views/index_content.html'
      }
    }
  }).
  state('app.register', {
    url: '/register',
    views: {
      "content@app": {
        controller: 'RegisterCtrl',
        templateUrl: 'app/auth/views/register_content.html'
      }
    }
  }).
  state('m0018-login', {
    url: '/m0018-login',
    views: {
      "root": {
        controller: 'RegisterCtrl',
        templateUrl: 'app/auth/views/m0018_login.html'
      }
    }
  })
}