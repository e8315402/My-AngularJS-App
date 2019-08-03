import template from './dashboard.html';
import './style/index.css';

'use strict';

export default function dashboard() {

  /** @ngInject */
  function controller($scope, propertyService, uiGridConstants, MODE) {
    var vm = this;
    vm.properties = [];
    vm.gettingProperties = false;
    vm.selectedProp = null;
    vm.uiGridOptions = null;
    vm.callTheWaiter = false;
    vm.openBorrowingPanel = false;

    vm.waiterMode = MODE.VIEW;
    vm.createProperty = createProperty;
    vm.checkProperty = checkProperty;
    vm.getProperties = getProperties;
    vm.editProperty = editProperty;
    vm.deleteProperty = deleteProperty;
    vm.borrowProperty = borrowProperty;
    vm.closeBorrowingPanel = closeBorrowingPanel;
    vm.borrowingDone = borrowingDone;
    vm.gridListener = {};
    vm.gridListener.onSelect = onSelect;
    vm.onCancel = onCancel;
    vm.onDone = onDone;

    init();

    function init() {
      initPropertyGrid();
      vm.getProperties();
    }

    function initPropertyGrid() {
      vm.uiGridOptions = {
        columnDefs: [
          { name: 'number', field: 'number', minWidth: 175 },
          { name: 'makeAndModel', field: 'makeAndModel', minWidth: 140, width: 250 },
          { name: 'type', field: 'type', minWidth: 100, width: 120 },
          { name: 'cost', field: 'cost', minWidth: 100, width: 120 },
          { name: 'presentValue', field: 'presentValue', minWidth: 120, width: 120 },
          { name: 'purchaseDate', field: 'purchaseDate', minWidth: 120, width: 120 },
          { name: 'ageLimit', field: 'ageLimit', minWidth: 100, width: 120 },
          { name: 'custodian', field: 'custodian', minWidth: 200, width: 200 },
          { name: 'user', field: 'user', minWidth: 150, width: 150 },
          { name: 'location', field: 'location', minWidth: 200, width: 200 },
          { name: 'placement', field: 'placement', minWidth: 200, width: 200 },
          { name: 'remarks', field: 'remarks', minWidth: 150, width: 200 }
        ],
        data: 'dashboardVM.properties',
        minimumColumnSize: 100,
        enableHorizontalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
        enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
        enableFullRowSelection: true,
        enableColumnResizing: true,
        enableRowSelection: true,
        enableFiltering: true,
        multiSelect: false,
        onRegisterApi: function (gridApi) {
          gridApi.selection.on.rowSelectionChanged($scope, vm.gridListener.onSelect);
        }
      };
    }

    function createProperty() {
      vm.waiterMode = MODE.NEW;
      vm.callTheWaiter = true;
    }

    function checkProperty() {
      vm.waiterMode = MODE.VIEW;
      vm.callTheWaiter = true;
    }

    function editProperty() {
      vm.waiterMode = MODE.EDIT;
      vm.callTheWaiter = true;
    }

    function deleteProperty() {
      propertyService.api.delete({ number: vm.selectedProp.number }).$promise.then(vm.getProperties);
    }

    function getProperties() {
      vm.gettingProperties = true;
      return propertyService.api.query().$promise.then(function (props) {
        vm.properties = props;
        vm.gettingProperties = false;
        vm.selectedProp = null;
        return props;
      });
    }

    function borrowProperty() {
      vm.openBorrowingPanel = true;
    }

    function closeBorrowingPanel() {
      vm.openBorrowingPanel = false;
    }

    function borrowingDone() {
      vm.openBorrowingPanel = false;
      vm.getProperties();
    }

    function onSelect(row) {
      vm.selectedProp = row.isSelected ? row.entity : null;
    }

    function onCancel() {
      vm.callTheWaiter = false;
    }

    function onDone() {
      vm.callTheWaiter = false;
      vm.getProperties();
    }
  }

  return {
    bindings: {},
    controller: controller,
    controllerAs: 'dashboardVM',
    template: template
  }
}