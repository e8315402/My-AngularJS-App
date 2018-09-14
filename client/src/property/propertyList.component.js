import propertyListTemplate from "./propertyList.template.html";

(function () {
    'use strict';

    angular
        .module('property')
        .component('propertyList', propertyList());


    function propertyList() {

        propertyListController.$inject = ['properties'];

        function propertyListController(properties) {
            var vm = this;

            init();

            function init() {
                vm.isBuilderDisplay = false;
                vm.propertyList = [];

                vm.openBuilder = function () {
                    vm.isBuilderDisplay = true;
                }

                vm.closeBuilder = function () {
                    vm.isBuilderDisplay = false;
                    vm.refresh();
                }

                vm.refresh = function () {
                    properties.query().$promise.then(function (props) {
                        console.log('Properties :', JSON.stringify(props));
                        vm.propertyList = props;
                    });
                }

                vm.refresh();
            }
        }

        return {
            bindings: {},
            controller: propertyListController,
            template: propertyListTemplate
        }
    }

}());
