import userRegisterTemplate from './user-register.template.html';

(function () {
    'use strict';

    angular
        .module ('user')
        .component ('userRegister', userRegister());


    function userRegister() {

        /** @ngInject */
        function userRegisterController($scope, users){
            var vm = this;

            vm.account = {
                username: '',
                password: '',
                role: ''
            };
            vm.register = register;
            vm.roles = [];
            
            init();

            function init(){
                users.getRoles().$promise.then((roles) => vm.roles = roles);
            }

            function register() {
                users.save(vm.account).$promise.then(function (result) {
                    console.log('New account has been registered :', result);
                    vm.account = {};
                })
            }
        }

        return {
            controller: userRegisterController,
            controllerAs: 'registerVM',
            template: userRegisterTemplate
        }
    }

} ());