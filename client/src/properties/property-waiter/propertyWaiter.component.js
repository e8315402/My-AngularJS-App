import template from './propertyWaiter.template.html';
import './propertyWaiter.css';

(function () {
  'use strict';

  angular
    .module('property')
    .component('propertyWaiter', propertyWaiter());


  function propertyWaiter() {

    function propertyWaiterController($scope) {
      var vm = this;

      init();

      function init() {
        
      }

      vm.$onChanges = function () {
        console.info('changed');
      }

      $scope.close = function () {
        vm.onClose();
      }

    }

    return {
      bindings: {
        property: '<',
        onClose: '&isLeaving'
      },
      controller: propertyWaiterController,
      template: template
    }
  }

}());