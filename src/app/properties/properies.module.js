import 'angular-resource';
import 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.min.css';

(function () {
    'use strict';

    angular
        .module('property', [
            'ngResource',
            'ui.grid',
            'ui.grid.autoResize',
            'ui.grid.selection',
            'component',
            'utils'
        ]);

}());
