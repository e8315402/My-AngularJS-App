import sideNavTemplate from "./sideNav.template.html";
import "./sideNav.css";

(function () {
    'use strict';

    angular
        .module ('myAngularJSApp')
        .component ('sideNav', sideNav());


    function sideNav() {

        function sideNavController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: sideNavController,
            controllerAs: '${ctrl}',
            template: sideNavTemplate
        }
    }

} ());