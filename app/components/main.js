'use strict';

app.component('main', {
    templateUrl: 'components/main.html',
    controller: 'MainController'
});

app.controller('MainController', function ($state, $mdSidenav, $mdMedia, $scope) {

    $scope.$mdMedia = $mdMedia;

    this.toggleNav = () => $mdSidenav('global-left').toggle();

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
    },{
        name: "Test",
        state: "test",
        expand: false,
        modules: []
    }];

    this.menuLockedOpen = () => false; //$mdMedia('gt-md') && $state.current.name !== 'home';

});
