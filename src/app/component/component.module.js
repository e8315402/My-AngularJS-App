import button from './button';
import modal from "./modal";

(function () {
    'use strict';

    angular
        .module('component', [
            'utility'
        ])
        .directive('whButton', button)
        .component('whModal', modal());

}());