'use strict';

app.component('ethiopiaAudioCard', {
    templateUrl: 'components/ethiopia/ethiopia-audio-card.html',
    controller: 'EthiopiaAudioCardController',
    bindings: {
        original: '@',
        translation: '@',
        native: '@',
        audio: '@',
        audioType: '@?'
    }
});

app.controller('EthiopiaAudioCardController', function () {

});
