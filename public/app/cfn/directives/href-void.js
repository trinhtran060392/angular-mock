'use strict';

angular.module('app').directive('hrefVoid', hrefVoid);

function hrefVoid() {

  var directive = {
    link: link,
    restrict: 'EA'
  };

  return directive;

  function link(scope, element, attrs) {
    element.on('click', function (e){
      e.preventDefault();
    });
  }
}