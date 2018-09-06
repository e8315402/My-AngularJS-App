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
                    properties.query().$promise.then(function (props) {
                        console.log('Properties :', JSON.stringify(props));
                        vm.propertyList = props;
                    });
                }
            }
        }

        return {
            bindings: {},
            controller: propertyListController,
            template: propertyListTemplate
        }
    }

}());
