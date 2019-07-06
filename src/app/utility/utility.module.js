import dateTransformer from './dateTransformer.directive';
import uniqueNumber from './uniqueNumber.directive';

(function(){
    'use strict';

    angular
        .module('utility', [
            
        ])
        .directive('dateTransformer', dateTransformer)
        .directive('uniqueNumber', uniqueNumber);

}());