'use strict';

app.component('module', {
    templateUrl: 'components/module.html',
    controller: 'ModuleController',
    transclude: true,
    bindings: {
        title: "@"
    }
});

app.controller('ModuleController', function ($anchorScroll, $element) {
    this.segments = [];

    this.$postLink = () =>
        this.segments = [...$element.find('segment')].map(segment => {
            return {
                title: segment.getAttribute('title'),
                anchor: segment.getAttribute('anchor')
            }
        });


    this.scrollTo = anchor => $anchorScroll(anchor);

});
