import propertyBuilderTemplate from "./propertyBuilder.template.html";
import './index.css';

(function () {
    'use strict';

    angular
        .module ('property')
        .component ('propertyBuilder', propertyBuilder());


    function propertyBuilder() {

        /** @ngInject */
        function propertyBuilderController(properties){
            var vm = this;
            
            init();

            function init(){
                vm.property = {}

                vm.maxPurchaseDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

                vm.create = function create(prop) {
                    properties.save(prop).$promise.then(function (res) {
                        console.info('New property: ' + JSON.stringify(res));
                        vm.onClose();
                    }).catch(function (err) {
                        console.error(err);
                    });
                }

            }
        }

        return {
            bindings: {
                onClose: '&'
            },
            controller: propertyBuilderController,
            template: propertyBuilderTemplate
        }
    }

} ());
