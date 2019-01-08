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
        this.track = audioCtx.createMediaElementSource(this.audioElement);

        this.track.connect(audioCtx.destination);
        this.duration = this.audioElement.duration;

        this.audioElement.addEventListener('loadedmetadata', () =>{
            this.duration = this.audioElement.duration;
            this.loaded = true;
        });

        this.audioElement.addEventListener('ended', () => {
            this.playing = false;
        }, false);

        this.audioElement.addEventListener('timeupdate', () => {
            this.playingTime = this.audioElement.currentTime;
            console.log("playingtime: "+this.playingTime);
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

    this.changeTime = () => {
        console.log(this.playingTime);
        this.audioElement.currentTime = 30;
        console.log(this.audioElement.currentTime);
    };

});
