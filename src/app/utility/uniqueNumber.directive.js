'use strict';

/** @ngInject */
export default function uniqueNumber(propertyService) {

  function link(scope, elem, attr, ngModelCtrl) {
    ngModelCtrl.$parsers.push(validation);

    function validation(value) {
      propertyService.api.query({ number: value }).$promise.then(function (result) {
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