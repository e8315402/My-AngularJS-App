(function(){
    'use strict';

    angular
        .module('property')
        .service('properties', properties)

    /** @ngInject */
    function properties($resource){
        return $resource('api/properties');
    }

}());
