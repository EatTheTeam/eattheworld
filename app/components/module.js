'use strict';

app.component('module', {
    templateUrl: 'components/module.html',
    controller: 'ModuleController',
    transclude: true,
    bindings: {
        title: "@"
    }
});

app.controller('ModuleController', function () {
});
