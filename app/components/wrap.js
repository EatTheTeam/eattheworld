'use strict';

app.component('wrap', {
    restrict: 'E',
    transclude: true,
    replace: true,
    bindings: {
        heading: '@'
    },
    templateUrl: 'components/wrap.html'
});