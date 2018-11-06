'use strict';

app.component('module', {
    templateUrl: 'components/module.html',
    controller: 'ModuleController',
    bindings: {
        title: "@",
        icon: "@",
        state: "@",
        color: "@"
    }
});

app.controller('ModuleController', function () {
});
