import propertyDashboardTemplate from './property-dashboard.template.html';
import './index.css';

(function () {
  'use strict';

  angular
    .module('property')
    .component('propertyDashboard', propertyDashboard());


  function propertyDashboard() {

    /** @ngInject */
    function propertyDashboardController($scope, properties, uiGridConstants) {
      var vm = this;
      vm.properties = [];
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
      }

      function deleteProperty() {
        properties.do.delete({ number: vm.selectedProp.number }).$promise.then(function (res) {
          console.info(`Delete property: ${res}`);
          vm.getProperties();
        });
      }

      function getProperties() {
        return properties.do.query().$promise.then(function (props) {
          vm.properties = props;
          return props;
        });
      }

      function onSelect(row) {
        vm.selectedProp = row.isSelected ? row.entity : null;
      }

      function okThankYou() {
        vm.callTheWaiter = false;
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