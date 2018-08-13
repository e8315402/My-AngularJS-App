import angular from "angular";
import sidebar from './sidebar.directive.js';
import './sidebar.css';

(function () {
    'use strict';

    let myAngularJSApp = angular
        .module('myAngularJSApp', [

        ]);

    sidebar(myAngularJSApp);

}());
