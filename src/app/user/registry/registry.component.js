import template from './registry.html';

'use strict';

export default function registry() {

    /** @ngInject */
    function controller($scope, userService) {
        var vm = this;

        vm.account = {
            username: '',
            password: '',
            role: ''
        };
        vm.register = register;
        vm.roles = [];

        init();

        function init() {
            userService.api.getRoles().$promise.then((roles) => vm.roles = roles);
        }

        function register() {
            userService.api.save(vm.account).$promise.then(function (result) {
                console.log('New account has been registered :', result);
                vm.account = {};
            })
        }
    }

    return {
        controller: controller,
        controllerAs: 'registryVM',
        template: template
    }
}