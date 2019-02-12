'use strict';

app.component('imageCard', {
    templateUrl: 'components/image-card.html',
    controller: 'imageCardController',
    bindings: {
        title: "@",
        image: "@?"
    },
    transclude: true
});

app.controller('imageCardController', function () {
});
