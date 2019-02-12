'use strict';

app.component('imageHotspots', {
    templateUrl: 'components/interactive/image-hotspots/image-hotspots.html',
    controller: 'imageHotspotsController',
    bindings: {
        src: "@"
    },
    transclude: true,
    replace: true,
});

app.controller('imageHotspotsController', function ($element) {

    this.element = $element[0];

    this.$postLink = () =>
        this.hotspots = this.element.getElementsByTagName('hotspot');

});