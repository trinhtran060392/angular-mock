'use strict';

define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function (ng, couchPotato) {

  var app = ng.module('app', [
    'scs.couch-potato',
    'ui.router',

    'app.cfn'
  ]);

  couchPotato.configureApp(app);

  return app;
})
