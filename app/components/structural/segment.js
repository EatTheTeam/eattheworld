'use strict';

app.component('segment', {
    templateUrl: 'components/structural/segment.html',
    controller: 'SegmentController',
    transclude: true,
    bindings: {
        title: "@",
        anchor: "@"
    }
});

app.controller('SegmentController', function () {
});
