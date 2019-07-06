import '@uirouter/angularjs';
import angular from 'angular';

import { MODE } from "./constant";
import './utility';
import './property';
import './user';
import introduction from './introduction';

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
        component: 'dashboard'
      }

      var aboutState = {
        name: 'users',
        url: '/users',
        component: 'registry'
      }

      $stateProvider.state(helloState);
      $stateProvider.state(aboutState);

      $urlServiceProvider.rules.otherwise('properties');
    })
    .constant('MODE', MODE)
    .component('introduction', introduction());

}());
