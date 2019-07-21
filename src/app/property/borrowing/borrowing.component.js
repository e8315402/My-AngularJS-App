import template from './borrowing.html';
import './style/index.css';

'use strict';

export default function borrowing() {

  /** @ngInject */
  function controller(userService, propertyService) {
    var vm = this;
    
    vm.users = [];

    vm.borrow = borrow;

    init();

    function init() {
      userService.api.getUsers().$promise
      .then((users) => vm.users = users)
      .catch((error) => {
        console.error(error);
      });
    }

    function borrow() {
      propertyService.api.edit(vm.property).$promise
      .then((result) => {
        if (vm.onDone) vm.onDone(result);
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  return {
    bindings: {
      property: '<',
      onDone: '&?'
    },
    controller: controller,
    controllerAs: 'borrowingVM',
    template: template
  }
}