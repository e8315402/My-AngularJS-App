import sideNavTemplate from "./sideNav.template.html";
import './sidenav.css';

(function () {
    'use strict';

    angular
        .module('warehouse')
        .component('sideNav', sideNav());


    function sideNav() {

        /** @ngInject */
        function sideNavController(userService) {
            var vm = this;
            vm.currentUser = {};

            init();

            function init() {
                userService.api.getUserAccount().$promise.then((currentUser) => {
                    console.info(currentUser);
                    vm.currentUser = currentUser;
                }).catch(console.error);
            }
        }

        return {
            controller: sideNavController,
            template: sideNavTemplate
        }
    }

}());
