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
    .controller('warehouseCtrl', warehouseCtrl);

  function warehouseCtrl($scope) {
    $scope.favicon = favicon;
  }

  if (module.hot) {
    module.hot.accept();
  }

}());
