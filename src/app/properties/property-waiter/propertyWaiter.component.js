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

      init();

      function init() {
        
      }

      function close() {
        vm.onClose();
      }

      function create() {
        properties.do.save(vm.property).$promise.then(function (result) {
          console.log('New property has been created :', result);
          vm.onClose();
        });
      }

    }

    return {
      bindings: {
        onClose: '&isLeaving'
      },
      controller: propertyWaiterController,
      controllerAs: 'waiterVM',
      template: template
    }
  }

}());