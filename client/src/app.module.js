import angular from "angular";
import './index.css';

(function () {
    'use strict';

    angular
        .module('myAngularJSApp', [
            'property'
        ]);

    if (module.hot) {
        module.hot.accept();
    }

}());
