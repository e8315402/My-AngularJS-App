(function(){
    'use strict';

    angular
        .module('property')
        .service('properties', properties)

    properties.$inject = ['$resource'];

    /** @ngInject */
    function properties($resource){
        return $resource('api/properties');
    }

}());
