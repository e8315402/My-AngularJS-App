import propertyBuilderTemplate from "./propertyBuilder.template.html";

(function () {
    'use strict';

    angular
        .module ('property')
        .component ('propertyBuilder', propertyBuilder());


    function propertyBuilder() {

        function propertyBuilderController(){
            var vm = this;
            
            init();

            function init(){
                vm.property = {}
                vm.save = function save(prop) {
                    console.info('New property: ' + prop);
                    vm.property = angular.copy(prop);
                }
            }
        }

        return {
            bindings: {},
            controller: propertyBuilderController,
            template: propertyBuilderTemplate
        }
    }

} ());
