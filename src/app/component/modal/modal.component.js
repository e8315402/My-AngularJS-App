import template from './modal.html';
import './style/index.css';

'use strict';

export default function modal() {
  
  /** @ngInject */
  function controller() {

    var vm = this;

    vm.close = close;

    init();

    function init() {
      
    }

    function close() {
      if (vm.onClose) vm.onClose();
    }
    
  }

  return {
    bindings: {
      onClose: '&?'
    },
    controller: controller,
    controllerAs: 'modalVM',
    transclude: true,
    template: template
  }
}