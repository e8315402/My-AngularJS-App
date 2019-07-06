import userService from './api';
import registry from './registry';

(function(){
    'use strict';

    angular
        .module('user', [
            'ngResource'
        ])
        .factory('userService', userService)
        .component('whRegistry', registry());

}());