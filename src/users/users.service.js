(function(){
    'use strict';

    angular
        .module('user')
        .service('users', users)

    /** @ngInject */
    function users($resource){
      return { do: $resource('api/users') };
    }

}());