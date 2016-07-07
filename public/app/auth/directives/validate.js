define(['cfn/module'], function (module) {
  'use strict';
  module.registerDirective('validate', [function () {

    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        ele.focusout(function(){
          if($(this).val()) {
            $(this).parent().addClass("is-ok");
          }
          else {
            $(this).parent().removeClass("is-ok");
          }
        })
        .change(function() {
          if($(this).val()) {
            $(this).parent().addClass("is-ok");
          }
          else {
            $(this).parent().removeClass("is-ok");
          }
        });
      }
    }
  }])
})