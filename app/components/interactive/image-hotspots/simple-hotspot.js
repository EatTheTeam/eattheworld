'use strict';

app.component('simpleHotspot', {
    templateUrl: 'components/interactive/image-hotspots/simple-hotspot.html',
    controller: 'simpleHotspotController',
    bindings: {
        heading: '@',
        description: '@',
        x: '@',
        y: '@'
    }
});

app.controller('simpleHotspotController', function () {

});