(function () {
    'use strict';

    angular
        .module('property')
        .factory('properties', properties);

    /** @ngInject */
    function properties($resource) {
        const options = {};
        const customApi = {
            edit: {
                method: 'PUT',
                url: 'api/properties/:id',
                params: { id: '@_id' }
            }
        };

        return $resource('api/properties', options, customApi);
    }

}());