'use strict';

app.component('eatAudio', {
    templateUrl: 'components/eatAudio.html',
    controller: 'eatAudioController',
    bindings: {
        src: "@",
    }
});

app.controller('eatAudioController', function ($window, $element, $scope, $log) {
    const AudioContext = $window.AudioContext;
    const audioCtx = new AudioContext();

    this.playing = false;

    this.loaded = false;

    this.$onInit = () => {

        this.audioElement = $element.find("audio").get(0);
        this.audioElement.volume = 0.5;


        this.audioElement.addEventListener('ended', () => {
            this.playing = false;
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
