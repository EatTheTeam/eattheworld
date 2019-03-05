'use strict';

app.component('titledImage', {
    templateUrl: 'components/titled-image.html',
    controller: 'titledController',
    bindings: {
        title: "@",
        src: "@",
        width: "@?",
        height: "@?",
        radius: "@?"
    }
});

app.controller('titledController', function () {
    this.$onInit = () => console.log("Im here");
});
