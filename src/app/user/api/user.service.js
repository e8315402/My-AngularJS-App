'use strict';

/** @ngInject */
export default function userService($resource) {
    let currentUser = undefined;
    const options = {};
    const customApi = {
        getUserAccount: {
            method: 'GET',
            url: 'api/users/current',
            interceptor: {
                request: config => config,
                response: (response) => {
                    currentUser = response.resource;
                    return currentUser;
                }
            }
        },
        getRoles: {
            method: 'GET',
            url: 'api/roles',
            isArray: true
        },
        getUsers: {
            method: 'GET',
            url: 'api/users',
            isArray: true
        }
    };

    return {
        api: $resource('api/users', options, customApi),
        getCurrentUser: () => currentUser
    };
}