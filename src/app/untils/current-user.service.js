(function(){
    'use strict';

    angular
        .module('utils')
        .service('currentUserService', currentUserService)

    /** @ngInject */
    function currentUserService(){

        this.getCurrentUser = getCurrentUser;
        this.setCurrentUser = setCurrentUser;

        function getCurrentUser(){
            return this.user;
        }

        function setCurrentUser(user) {
          this.user = user;
        }
    }

}());