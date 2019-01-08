'use strict';

app.component('test', {
    templateUrl: 'components/test.html',
    controller: 'TestController'
});

app.controller('TestController', function (ThreeDObject) {
    /*
    this.$onInit = function() {
        ThreeDObject.create("three-js-project", 500, 300);
    };
    */
});
