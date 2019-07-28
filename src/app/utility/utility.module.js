import utility from './utility.factory';

import dateTransformer from './dateTransformer.directive';
import uniqueNumber from './uniqueNumber.directive';

(function(){
    'use strict';

    angular
        .module('utility', [
            
        ])
        .factory('whUtility', utility)
        .directive('dateTransformer', dateTransformer)
        .directive('uniqueNumber', uniqueNumber);

}());