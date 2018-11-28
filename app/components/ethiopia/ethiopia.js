'use strict';

app.component('ethiopia', {
    templateUrl: 'components/ethiopia/ethiopia.html',
    controller: 'EthiopiaController'
});

app.controller('EthiopiaController', function (globalData) {

    this.$onInit = () => globalData.showToolBar = true;

});
