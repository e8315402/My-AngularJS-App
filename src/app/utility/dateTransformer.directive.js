/** @ngInject */
export default function dateTransformer() {

  function link(scope, elem, attr, ngModelCtrl) {
    ngModelCtrl.$formatters.push(function (value) {
      return value ? new Date(value) : '';
    });
  }

  return {
    require: 'ngModel',
    link: link
  }
}