import template from './propertyWaiter.template.html';
import './propertyWaiter.css';

(function () {
  'use strict';

  angular
    .module('property')
    .component('propertyWaiter', propertyWaiter());


  function propertyWaiter() {

    function propertyWaiterController($scope, properties) {
      var vm = this;

      init();

      function init() {
        $scope.property = {};
      }

      $scope.close = function () {
        vm.onClose();
      }

      $scope.create = function () {
        console.log('property :', $scope.property);
        properties.save($scope.property).$promise.then(function (result) {
          console.log('New property has been created :', result);
          vm.onClose();
        });
      }

    }

    return {
      bindings: {
        // property: '<',
        onClose: '&isLeaving'
      },
      controller: propertyWaiterController,
      template: template
    }
  }

}());