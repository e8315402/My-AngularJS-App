import propertiesTemplate from "./properties.template.html";

(function () {
    'use strict';

    angular
        .module('property')
        .component('properties', properties());


    function properties() {

        function propertiesController() {
            var vm = this;

            init();

            function init() {
                vm.properties = [{
                    name: 'Property one'
                }]
            }
        }

        return {
            bindings: {},
            controller: propertiesController,
            template: propertiesTemplate
        }
    }

}());
