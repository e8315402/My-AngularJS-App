import angular from "angular";
import './index.css';
import favicon from './asserts/img/favicon.png';

(function () {
  'use strict';

  angular
    .module('warehouse', [
      'property',
      'component',
      'utils'
    ])
    .controller('warehouseController', warehouseController);

  /** @ngInject */
  function warehouseController($scope) {
    $scope.favicon = favicon;
  }

  if (module.hot) {
    module.hot.accept();
  }

}());
