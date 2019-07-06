'use strict';

/** @ngInject */
export default function propertyService($resource) {
    const options = {};
    const customApi = {
        edit: {
            method: 'PUT',
            url: 'api/properties/:id',
            params: { id: '@_id' }
        }
    };

    return {
        api: $resource('api/properties', options, customApi)
    };
}