define(['cfn/module'], function (module) {
	'use strict';
	module.registerDirective('smartInclude', [function () {

		return {
			replace: true,
			restrict: 'A',
			templateUrl: function (element, attr) {
				return attr.smartInclude;

			}, 
			compile: function(element) {
				element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
			}
		}
	}])
})