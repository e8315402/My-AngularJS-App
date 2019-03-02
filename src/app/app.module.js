import angular from 'angular';
import './index.css';
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

      $urlServiceProvider.rules.otherwise('properties');
    })

  if (module.hot) {
    module.hot.accept();
  }

}());
