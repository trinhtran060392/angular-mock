
'use strict';

angular.module('app', ['ui.router', 'app.cfn']).config(config);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise(function($injector) {
    var $state = $injector.get("$state");
    $state.go('app.cfn');
  });
  
}
