import template from './manager.html';
import './style/index.css';

'use strict';

export default function manager() {

  /** @ngInject */
  function controller($scope, propertyService, MODE) {
    const vm = this;
    const propertyTemplate = {
      number: null,
      name: null,
      makeAndModel: null,
      type: null,
      cost: 0,
      presentValue: 0,
      purchaseDate: null,
      ageLimit: 0,
      custodian: null,
      user: null,
      location: null,
      placement: null,
      remarks: ''
    };
    vm.MODE = MODE;
    vm.close = close;
    vm.create = create;
    vm.edit = edit;

    vm.$onInit = () => {
      if (vm.mode === undefined) throw "The attribute \"mode\" for property-waiter is required.";
    }

    vm.$onChanges = (changedObj) => {
      if (changedObj.mode) modeChanged();
    }

    function modeChanged() {
      vm.editable = (vm.mode !== MODE.VIEW);
      if (vm.mode === MODE.NEW) vm.property = angular.copy(propertyTemplate);
    }

    function close() {
      if (vm.onClose) vm.onClose();
    }

    function create() {
      propertyService.api.save(vm.property).$promise.then(function (result) {
        if (vm.onDone) vm.onDone(result);
      });
    }

    function edit() {
      propertyService.api.edit(vm.property).$promise.then(function (result) {
        if (vm.onDone) vm.onDone(result);
      });
    }

  }

  return {
    bindings: {
      onClose: '&?onCancel',
      onDone: '&?',
      property: '<',
      mode: '<'
    },
    controller: controller,
    controllerAs: 'managerVM',
    template: template
  }
}