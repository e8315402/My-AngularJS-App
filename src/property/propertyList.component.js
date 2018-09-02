import propertyListTemplate from "./propertyList.template.html";

(function () {
    'use strict';

    angular
        .module('property')
        .component('propertyList', propertyList());


    function propertyList() {

        function propertyListController() {
            var vm = this;

            init();

            function init() {
                vm.showBuilder = false;
                vm.propertyList = [{
                    name: 'Property one'
                }];
                vm.create = function () {
                    vm.showBuilder = true;
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
