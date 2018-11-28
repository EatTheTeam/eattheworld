'use strict';

app.component('japanGeneral', {
    templateUrl: 'components/japan/japan-general.html',
    controller: 'JapanGeneralController'
});

app.controller('JapanGeneralController', function (globalData) {

    this.$onInit = () => globalData.showToolBar = true;
});
