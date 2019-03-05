'use strict';

app.component('module', {
    templateUrl: 'components/structural/module.html',
    controller: 'ModuleController',
    transclude: true,
    bindings: {
        title: "@"
    }
});

app.controller('ModuleController', function ($element, $state) {
    this.segments = [];

    this.$postLink = () =>
        this.segments = [...$element.find('segment')].map(segment => {
            return {
                title: segment.getAttribute('title'),
                anchor: segment.getAttribute('anchor')
            }
        });

    this.isState = (name) => $state.current.name.toLowerCase().includes(name);

    this.getState = () => this.isState("ethiopia") ? "ethiopia" : (this.isState("japan") ? "japan" : "home");
});
