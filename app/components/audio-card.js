'use strict';

app.component('audioCard', {
    templateUrl: 'components/audio-card.html',
    controller: 'audioCardController',
    bindings: {
        text: "@?",
        src: "@?",
        noText: "<"
    },
    transclude: true
});

app.controller('audioCardController', function () {
});
