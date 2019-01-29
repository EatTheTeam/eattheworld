'use strict';

app.component('imageCard', {
    templateUrl: 'components/interactive/imageCard.html',
    controller: 'imageCardController',
    bindings: {
        title: "@",
        image: "@?"
    },
    transclude: true
});

app.controller('imageCardController', function () {
});
