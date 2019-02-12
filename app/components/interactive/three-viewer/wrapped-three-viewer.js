'use strict';

app.component('wrappedThreeViewer', {
    templateUrl: 'components/interactive/wrapped-three-viewer.html',
    controller: 'wrappedThreeViewerController',
    bindings: {
        model: "@",
        title: "@?"
    }
});

app.controller('wrappedThreeViewerController', function () {

});
