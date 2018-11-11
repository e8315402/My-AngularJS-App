import propertyDashboardTemplate from './property-dashboard.template.html';
import './index.css';

(function () {
    'use strict';

    angular
        .module ('property')
        .component ('propertyDashboard', propertyDashboard());


    function propertyDashboard() {

        /** @ngInject */
        function propertyDashboardController($scope, properties, uiGridConstants){
            var vm = this;

            vm.isBuilderDisplay = false;
            vm.properties = [];
            vm.selectedProp = null;

            vm.uiGridOptions = {
                data: '$ctrl.properties',
                minimumColumnSize: 150,
                enableHorizontalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
                enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
                enableFullRowSelection: true,
                enableRowSelection: true,
                enableFiltering: true,
                multiSelect: false,
                onRegisterApi: function (gridApi) {
                    gridApi.selection.on.rowSelectionChanged($scope, vm.onSelect);
                }
            };

            vm.createProperty = function () {
                vm.isBuilderDisplay = true;
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
            
            vm.getProperties = function () {
                return properties.query().$promise.then(function (props) {
                    vm.properties = props;
                    return props;
                });
            }

            vm.onSelect = function (row) {
                vm.selectedProp = row.isSelected ? row.entity : null;
            }

            init();

            function init(){
                vm.getProperties();
            }
        }

        return {
            bindings: {},
            controller: propertyDashboardController,
            template: propertyDashboardTemplate
        }
    }

} ());