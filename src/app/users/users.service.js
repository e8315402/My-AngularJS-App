(function () {
    'use strict';

    angular
        .module('user')
        .service('users', users)

    /** @ngInject */
    function users($resource) {
        const options = {};
        const customApi = {
            getUserAccount: {
                method: 'GET',
                url: 'api/users/current'
            },
            getRoles: {
                method: 'GET',
                url: 'api/roles',
                isArray: true
            }
        };

        return $resource('api/users', options, customApi);
    }

}());