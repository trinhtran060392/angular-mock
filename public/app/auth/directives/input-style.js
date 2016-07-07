define(['cfn/module'], function (module) {
  'use strict';
  module.registerDirective('inputStyle', [function () {

    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        ele.focusin(function () {
          $(this).parent().addClass("is-focused");
        }).focusout(function(){
        $(this).parent().removeClass("is-focused");
        if($(this).val()) {
          $(this).parent().addClass("is-input");
        }
        else {
          $(this).parent().removeClass("is-input");
        }
      });
      }
    }
  }])
})