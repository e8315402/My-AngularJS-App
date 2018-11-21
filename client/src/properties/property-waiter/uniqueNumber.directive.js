(function () {
  'use strict';

  angular
    .module('property')
    .directive('uniqueNumber', uniqueNumber);


  /** @ngInject */
  function uniqueNumber(properties) {

    function link(scope, elem, attr, ngModelCtrl) {
      function validation(value) {
        properties.query({number: value}).$promise.then(function (result) {
          ngModelCtrl.$setValidity('uniqueNumber', !result.length);
        })
        return value;
      }
      ngModelCtrl.$parsers.push(validation);
    }

    return {
      require: 'ngModel',
      link: link,
    }
  }

}());