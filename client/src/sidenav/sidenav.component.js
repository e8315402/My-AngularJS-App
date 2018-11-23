import sideNavTemplate from "./sideNav.template.html";
import './sidenav.css';

(function () {
    'use strict';

    angular
        .module('warehouse')
        .component('sideNav', sideNav());


    function sideNav() {

        function sideNavController() {
            var vm = this;

            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: sideNavController,
            template: sideNavTemplate
        }
    }

}());
