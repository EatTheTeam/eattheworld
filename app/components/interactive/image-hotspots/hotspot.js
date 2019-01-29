'use strict';

app.component('hotspot', {
    templateUrl: 'components/interactive/image-hotspots/hotspot.html',
    controller: 'hotspotController',
    transclude: true,
    bindings: {
        x: '@',
        y: '@'
    }
});

app.controller('hotspotController', function () {

});