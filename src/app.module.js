import angular from 'angular';
import './index.css';
import favicon from './asserts/img/favicon.png';
import '@uirouter/angularjs';

(function () {
  'use strict';

  angular
    .module('warehouse', [
      'property',
      'component',
      'utils',
      'user',
      'ui.router'
    ])
    .controller('warehouseController', warehouseController)
    .config(function ($stateProvider, $urlServiceProvider) {
      var helloState = {
        name: 'properties',
        url: '/properties',
        component: 'propertyDashboard'
      }
    
      var aboutState = {
        name: 'users',
        url: '/users',
        component: 'userRegister'
      }
    
      $stateProvider.state(helloState);
      $stateProvider.state(aboutState);

      $urlServiceProvider.rules.otherwise('users');
    })

  /** @ngInject */
  function warehouseController($scope) {
    $scope.favicon = favicon;
  }

  if (module.hot) {
    module.hot.accept();
  }

}());
