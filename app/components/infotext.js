'use strict';

app.component('infotext', {
    templateUrl: 'components/infotext.html',
    controller: 'infotextController',
    bindings: {
        image: "@?"
    },
    transclude: true
});

app.controller('infotextController', function () {
});
