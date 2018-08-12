export default (angular) =>  {
  angular.module('myAngularJSApp')
         .directive('sidebar', sidebar);

    /** @ngInject */
    function directive(Dependencies) {

      function directiveController(){
          var vm = this;
          
          init();

          function init(){

          }
      }

      function link(){

      }

      return {
          bindToController: true,
          controller: directiveController,
          controllerAs: 'Ctrl',
          link: link,
          restrict: 'AE',
          scope: {},
      }
  }
  
};
