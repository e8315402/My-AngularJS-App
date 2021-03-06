import '@uirouter/angularjs';
import angular from 'angular';

import { MODE } from "./constant";
import './component';
import './utility';
import './property';
import './user';
import navbar from './navbar';

import './index.css';

(function () {
  'use strict';

  angular
    .module('warehouse', [
      'property',
      'utility',
      'user',
      'ui.router'
    ])
    .config(function ($stateProvider, $urlServiceProvider) {
      var helloState = {
        name: 'properties',
        url: '/properties',
        component: 'whDashboard'
      }

      var aboutState = {
        name: 'users',
        url: '/users',
        component: 'whRegistry'
      }

      $stateProvider.state(helloState);
      $stateProvider.state(aboutState);

      $urlServiceProvider.rules.otherwise('properties');
    })
    .constant('MODE', MODE)
    .component('whNavbar', navbar());

}());
