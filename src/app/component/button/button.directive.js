'use strict';

import './style/index.css';

/** @ngInject */
export default function button() {

  /** @ngInject */
  function controller($scope, whUtility) {
    var vm = this;

    init();

    function init() {

    }

    $scope.addRipple = (event) => {
      var rippler = document.createElement('span');
      var size = event.currentTarget.offsetWidth;
      var pos = event.currentTarget.getBoundingClientRect();
      var x = event.pageX - pos.left - (size / 2);
      var y = event.pageY - pos.top - (size / 2);
      rippler.setAttribute('style', 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;');
      vm.rippleContainer[0].appendChild(rippler);
    };

    $scope.cleanUp = whUtility.debounce((event) => {
      while (vm.rippleContainer.children().length) vm.rippleContainer.empty();
    }, 1000);
  }

  function link(scope, elem, attrs, ctrl) {
    elem.addClass('__wh_mtd_btn');
    elem.addClass('ripple');
    if (angular.isDefined(attrs.lg)) elem.addClass('__wh_mtd_btn_lg');
    if (angular.isDefined(attrs.ol)) elem.addClass('__wh_mtd_btn_ol');

    ctrl.rippleContainer = angular.element(document.createElement('div'));
    ctrl.rippleContainer.addClass('ripple-container');
    elem.append(ctrl.rippleContainer);

    elem.on('mousedown', scope.addRipple);
    elem.on('mouseup', scope.cleanUp);
  }

  return {
    controller: controller,
    controllerAs: 'buttonVM',
    link: link
  }
}