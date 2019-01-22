'use strict';

app.component('eatAudio', {
    templateUrl: 'components/eatAudio.html',
    controller: 'eatAudioController',
    bindings: {
        src: "@",
        type: "@"
    }
});

app.controller('eatAudioController', function ($window, $element, $scope, $log) {
    const AudioContext = $window.AudioContext;
    const audioCtx = new AudioContext();

    this.playing = false;

    this.$onInit = () => {
        this.type = this.type | "audio/mpeg";

        this.audioElement = $element.find("audio").get(0);

        this.audioElement.addEventListener('ended', () => {
            this.playing = false;
            $scope.$apply();
        }, false);

    };


    this.play = () => {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        this.audioElement.play();
        this.playing = true;
    };

    this.pause = () => {
        this.audioElement.pause();
        this.playing = false;
    };


});
