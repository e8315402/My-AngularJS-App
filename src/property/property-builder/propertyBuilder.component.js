import propertyBuilderTemplate from "./propertyBuilder.template.html";

(function () {
    'use strict';

    angular
        .module ('property')
        .component ('propertyBuilder', propertyBuilder());


    function propertyBuilder() {

        propertyBuilderController.$inject = ['properties'];
        
        function propertyBuilderController(properties){
            var vm = this;
            
            init();

            function init(){
                vm.property = {}

                vm.create = function create(prop) {
                    properties.save(prop).$promise.then(function (res) {
                        console.info('New property: ' + res);
                    }).catch(function (err) {
                        console.error(err);
                    });
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
