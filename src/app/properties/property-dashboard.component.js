import propertyDashboardTemplate from './property-dashboard.template.html';
import './index.css';

(function () {
  'use strict';

  angular
    .module('property')
    .component('propertyDashboard', propertyDashboard());


  function propertyDashboard() {

    /** @ngInject */
    function propertyDashboardController($scope, propertyService, uiGridConstants) {
      var vm = this;
      vm.properties = [];
      vm.gettingProperties = false;
      vm.selectedProp = null;
      vm.uiGridOptions = null;
      vm.callTheWaiter = false;

      vm.createProperty = createProperty;
      vm.getProperties = getProperties;
      vm.editProperty = editProperty;
      vm.deleteProperty = deleteProperty;
      vm.gridListener = {};
      vm.gridListener.onSelect = onSelect;
      vm.okThankYou = okThankYou;

      init();

      function init() {
        initPropertyGrid();
        vm.getProperties();
      }

      function initPropertyGrid() {
        vm.uiGridOptions = {
          columnDefs: [
            { name: 'number', field:'number' },
            { name: 'makeAndModel', field:'makeAndModel' },
            { name: 'type', field:'type' },
            { name: 'cost', field:'cost' },
            { name: 'presentValue', field:'presentValue' },
            { name: 'purchaseDate', field:'purchaseDate' },
            { name: 'ageLimit', field:'ageLimit' },
            { name: 'custodian', field:'custodian' },
            { name: 'user', field:'user' },
            { name: 'location', field:'location' },
            { name: 'placement', field:'placement' }
          ],
          data: 'dashboardVM.properties',
          minimumColumnSize: 150,
          enableHorizontalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
          enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
          enableFullRowSelection: true,
          enableRowSelection: true,
          enableFiltering: true,
          multiSelect: false,
          onRegisterApi: function (gridApi) {
            gridApi.selection.on.rowSelectionChanged($scope, vm.gridListener.onSelect);
          }
        };
      }

      function createProperty() {
        vm.callTheWaiter = true;
      }

      function editProperty(prop) {
        console.info(`Edit property: ${prop}`);
        vm.callTheWaiter = true;
      }

      function deleteProperty() {
        propertyService.api.delete({ number: vm.selectedProp.number }).$promise.then(function (res) {
          console.info(`Delete property: ${res}`);
          vm.getProperties();
        });
      }

      function getProperties() {
        vm.gettingProperties = true;
        return propertyService.api.query().$promise.then(function (props) {
          vm.properties = props;
          vm.gettingProperties = false;
          return props;
        });
      }

      function onSelect(row) {
        vm.selectedProp = row.isSelected ? row.entity : null;
      }

      function okThankYou() {
        vm.callTheWaiter = false;
        vm.getProperties();
      }
    }

    return {
      bindings: {},
      controller: propertyDashboardController,
      controllerAs: 'dashboardVM',
      template: propertyDashboardTemplate
    }
  }

}());