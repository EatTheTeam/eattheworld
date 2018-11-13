'use strict';

app.component('main', {
    templateUrl: 'components/main.html',
    controller: 'MainController'
});

app.controller('MainController', function (NavService) {
    this.toggleNav = () => NavService.getGlobal().toggle();

    this.navData = [{
        name: "Japan",
        state: "japan",
        expand: false,
        modules: [{
            name: "General",
            state: "japan-general"
        }]
    }, {
        name: "Ethiopia",
        state: "ethiopia",
        expand: false,
        modules: [{
            name: "General",
            state: "ethiopia-general"
        }]
    }];

    this.expand = c => navData[c].expand = true;
    this.collapse = c => navData[c].expand = false;
});
