import propertyListTemplate from "./propertyList.template.html";

(function () {
    'use strict';

    angular
        .module('property')
        .component('propertyList', propertyList());

    function propertyList() {

        /** @ngInject */
        function propertyListController($scope, properties) {
            var vm = this;

            function init() {
                vm.getProperties();
            }

            vm.isBuilderDisplay = false;

            vm.propertyList = [];
            vm.selectedProp = null;

            vm.uiGridOptions = {
                data: '$ctrl.propertyList',
                enableFullRowSelection: true,
                enableRowSelection: true,
                // enableSelectAll: true,
                multiSelect: false,
                onRegisterApi: function (gridApi) {
                    gridApi.selection.on.rowSelectionChanged($scope, vm.onSelect);
                }
            };

            vm.createProperty = function () {
                if (vm.isBuilderDisplay) return;
                vm.isBuilderDisplay = true;
            }

            vm.closeCreatingPanel = function () {
                vm.isBuilderDisplay = false;
                vm.getProperties();
            }

            vm.getProperties = function () {
                properties.query().$promise.then(function (props) {
                    console.info('Properties :', JSON.stringify(props));
                    vm.propertyList = props;
                });
            }

            vm.editProperty = function (prop) {
                console.info(`Edit property: ${prop}`);
            }

            vm.deleteProperty = function () {
                properties.delete({ number: vm.selectedProp.entity.number }).$promise.then(function (res) {
                    console.info(`Delete property: ${res}`);
                    vm.getProperties();
                });
            }

            vm.onSelect = function (row) {
                vm.selectedProp = row.isSelected ? row : null;
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
