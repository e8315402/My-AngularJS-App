(function () {
  'use strict';

  angular
    .module('property')
    .directive('uniqueNumber', uniqueNumber);


  /** @ngInject */
  function uniqueNumber(properties) {

    function link(scope, elem, attr, ngModelCtrl) {
      ngModelCtrl.$parsers.push(validation);

      function validation(value) {
        properties.query({ number: value }).$promise.then(function (result) {
          ngModelCtrl.$setValidity('uniqueNumber', !result.length);
        })
        return value;
      }
    }

    return {
      require: 'ngModel',
      link: link,
    }
  }

}());