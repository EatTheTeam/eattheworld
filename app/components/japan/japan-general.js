'use strict';

app.component('japanGeneral', {
    templateUrl: 'components/japan/japan-general.html',
    controller: 'JapanGeneralController'
});

app.controller('JapanGeneralController', function () {

    this.timeJapan = () => {
        return new Date(Date.now() + 28800000).toLocaleTimeString();
    }
});
