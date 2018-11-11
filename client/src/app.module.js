import angular from "angular";
import 'angular-resizable/angular-resizable.min.js';
import 'angular-resizable/angular-resizable.min.css';
import './index.css';

(function () {
    'use strict';

    angular
        .module('warehouse', [
            'property',
            'component',
            'utils',
            'angularResizable'
        ]);

    if (module.hot) {
        module.hot.accept();
    }

}());
