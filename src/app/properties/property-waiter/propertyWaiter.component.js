import template from './propertyWaiter.template.html';
import './propertyWaiter.css';

(function () {
  'use strict';

  angular
    .module('property')
    .component('propertyWaiter', propertyWaiter());


  function propertyWaiter() {

    function propertyWaiterController(properties) {
      var vm = this;
      vm.property = {};
      vm.close = close;
      vm.create = create;
      vm.edit = edit;

      init();

      function init() {
        
      }

      function close() {
        vm.onClose();
      }

      function create() {
        properties.save(vm.property).$promise.then(function (result) {
          console.log('New property has been created :', result);
          vm.onClose();
        });
      }

      function edit() {
        properties.edit(vm.property).$promise.then(function (result) {
          console.log('Property has been updated :', result);
          vm.onClose();
        });
      }

    }

    return {
      bindings: {
        onClose: '&isLeaving',
        property: '<'
      },
      controller: propertyWaiterController,
      controllerAs: 'waiterVM',
      template: template
    }
  }

}());