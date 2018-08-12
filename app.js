import angular from "angular";
import sidebar from './sidebar.directive.js';

(function () {
    'use strict';

    let myAngularJSApp = angular
        .module('myAngularJSApp', [

        ]);

    sidebar(myAngularJSApp);

}());
