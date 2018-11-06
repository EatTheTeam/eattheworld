'use strict';

app.component('module', {
    templateUrl: 'components/module.html',
    controller: 'ModuleController',
    bindings: {
        title: "@",
        icon: "@",
        state: "@"
    }
});

app.controller('ModuleController', function ($state) {

    this.changeToState = () => $state.go(this.state);

});
