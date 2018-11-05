import theFormTemplate from './the-form.template.html';
import './index.css';

(function () {
    'use strict';

    angular
        .module('component')
        .directive('theForm', theForm);


    /** @ngInject */
    function theForm() {

        function link(scope, elem, attr) {
            scope.$watch('legend', function (legend) {
                console.log('legend :', legend);
            })
        }

        return {
            link: link,
            transclude: true,
            scope: {
                legend: '@',
                formId: '@'
            },
            template: theFormTemplate
        }
    }

}());