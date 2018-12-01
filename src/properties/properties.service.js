(function () {
    'use strict';

    angular
        .module('property')
        .factory('properties', properties)

    /** @ngInject */
    function properties($resource) {
        return $resource('api/properties');
    }

}());