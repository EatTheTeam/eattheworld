'use strict';

app.component('imageCard', {
    templateUrl: 'components/imageCard.html',
    controller: 'imageCardController',
    bindings: {
        title: "@",
        image: "@?"
    },
    transclude: true
});

app.controller('imageCardController', function () {
});
