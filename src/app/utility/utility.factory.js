'use strict';

/** @ngInject */
export default function utility() {

  return {
    debounce
  }

  function debounce(func, delay) {
    var inDebounce;
    return function () {
      var context = this
      var args = arguments
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  }
}