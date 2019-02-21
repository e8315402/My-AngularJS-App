(function () {
    'use strict';

    angular
        .module('property')
        .factory('properties', properties)

    /** @ngInject */
    function properties($resource) {
        return { do: $resource('api/properties', {}, { edit: { method: 'PUT', url: 'api/properties/:id', params: {id: '@_id'} } }) };
    }

}());