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

            function init() {
                vm.getProperties();
            }

            vm.isBuilderDisplay = false;
            
            vm.propertyList = [];
            
            vm.uiGridOptions = {
                data: '$ctrl.propertyList'
            };

            vm.openBuilder = function () {
                if (vm.isBuilderDisplay) return;
                vm.isBuilderDisplay = true;
            }

            vm.closeBuilder = function () {
                vm.isBuilderDisplay = false;
                vm.getProperties();
            }

            vm.getProperties = function () {
                properties.query().$promise.then(function (props) {
                    console.log('Properties :', JSON.stringify(props));
                    vm.propertyList = props;
                });
            }

            // vm.$onChanges = function (changesObj) {
            //     console.log('changesObj :', changesObj);
            // }

            // vm.$doCheck = function () {
            //     console.info('Digest process~');
            // }

            init();
        }

        return {
            bindings: {},
            controller: propertyListController,
            template: propertyListTemplate
        }
    }

}());
