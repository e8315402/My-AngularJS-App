import angular from "angular";
import './index.css';

(function () {
    'use strict';

    angular
        .module('warehouse', [
            'property',
            'component',
            'utils'
        ]);

    if (module.hot) {
        module.hot.accept();
    }

}());
