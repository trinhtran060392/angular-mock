//
window.name = "NG_DEFER_BOOTSTRAP!";

define([
  //library
  'require',
  'jquery',
  'angular',
  'domReady',
  'bootstrap',
  // module
  'cfn/module',

  //public directive
  'cfn/directives/smartInclude',

  //app define
  'app'
], function(require, $, ng, domReady) {
  'use strict';
  //bootstrap app
  domReady(function(document) {
    ng.bootstrap(document, ['app']);
    ng.resumeBootstrap();
  });
});