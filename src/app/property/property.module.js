import 'angular-resource';
import 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.min.css';

import manager from './manager';
import dashboard from './dashboard';
import borrowing from './borrowing';
import propertyService from './api';

(function () {
    'use strict';

    angular
        .module('property', [
            'ngResource',
            'ui.grid',
            'ui.grid.autoResize',
            'ui.grid.selection',
            'ui.grid.resizeColumns',
            'component',
            'utility'
        ])
        .factory('propertyService', propertyService)
        .component('whManager', manager())
        .component('whDashboard', dashboard())
        .component('whBorrowing', borrowing());

}());
