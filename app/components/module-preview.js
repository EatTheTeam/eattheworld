'use strict';

app.component('modulePreview', {
    templateUrl: 'components/module-preview.html',
    controller: 'ModulePreviewController',
    bindings: {
        title: "@",
        icon: "@",
        state: "@",
        color: "@"
    }
});

app.controller('ModulePreviewController', function () {
});
