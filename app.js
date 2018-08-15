import angular from "angular";
import './index.css';

import printMe from "./otherModule.js";

(function () {
    'use strict';

    angular
        .module('myAngularJSApp', [

        ]);

    if (module.hot) {
        module.hot.accept('./otherModule.js', function () {
            console.log('Accepting the printMe module!');
            printMe();
        })
    }

}());
