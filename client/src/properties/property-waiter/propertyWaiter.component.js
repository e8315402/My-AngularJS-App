import template from './propertyWaiter.template.html';
import './propertyWaiter.css';

(function () {
    'use strict';

    angular
        .module ('property')
        .component ('propertyWaiter', propertyWaiter());


    function propertyWaiter() {

        function propertyWaiterController($scope){
            var vm = this;
            
            init();

            function init(){
                
            }

            vm.$onChanges = function () {
                console.info('changed');
            }
        }

        return {
            bindings: {
                property: '<'
            },
            controller: propertyWaiterController,
            template: template
        }
    }

} ());