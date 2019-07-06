(function(){
    'use strict';

    angular
        .module('utility')
        .constant('MODE', {
          'VIEW': 0,
          'NEW' : 1,
          'EDIT': 2,
        });

}());