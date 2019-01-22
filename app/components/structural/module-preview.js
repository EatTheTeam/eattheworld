'use strict';

app.component('modulePreview', {
    templateUrl: 'components/structural/module-preview.html',
    controller: 'ModulePreviewController',
    bindings: {
        title: "@",
        image: "@",
        state: "@",
        description: "@"
    }
});

app.controller('ModulePreviewController', function () {
});
