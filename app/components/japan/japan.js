'use strict';

app.component('japan', {
    templateUrl: 'components/japan/japan.html',
    controller: 'JapanController'
});

app.controller('JapanController', function (globalData) {

    this.$onInit = () => globalData.showToolBar = true;
});
