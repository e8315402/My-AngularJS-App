import template from "./introduction.html";
import './style/index.css';

export default function introduction() {
    'use strict';

    /** @ngInject */
    function controller(userService) {
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
        controller: controller,
        template: template
    }

};