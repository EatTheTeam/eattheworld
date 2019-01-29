'use strict';

app.component('textCard', {
    templateUrl: 'components/textCard.html',
    controller: 'textCardController',
    bindings: {
        image: "@?"
    },
    transclude: true
});

app.controller('textCardController', function () {
});
