import template from './propertyWaiter.template.html';
import './propertyWaiter.css';

(function () {
  'use strict';

  angular
    .module('property')
    .component('propertyWaiter', propertyWaiter());


  function propertyWaiter() {

    function propertyWaiterController(propertyService) {
      var vm = this;
      vm.newProperty = {};
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
        propertyService.api.save(vm.newProperty).$promise.then(function (result) {
          console.log('New property has been created :', result);
          if (vm.onClose) vm.onClose();
        });
      }

      function edit() {
        propertyService.api.edit(vm.property).$promise.then(function (result) {
          console.log('Property has been updated :', result);
          if (vm.onClose) vm.onClose();
        });
      }

    }

    return {
      bindings: {
        onClose: '&isLeaving?',
        property: '<?'
      },
      controller: propertyWaiterController,
      controllerAs: 'waiterVM',
      template: template
    }
  }

}());