import propertyTemplate from './property.template.html';

(function () {
    'use strict';

    angular
        .module ('property')
        .component ('property', property());


    function property() {

        function propertyController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: propertyController,
            template: propertyTemplate
        }
    }

} ());