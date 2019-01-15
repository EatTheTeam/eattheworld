'use strict';

app.component('main', {
    templateUrl: 'components/structural/main.html',
    controller: 'MainController'
});

app.controller('MainController', function ($state, $mdSidenav, $mdMedia, $scope, $transitions, $mdTheming) {

    $scope.$mdMedia = $mdMedia;

    this.toggleNav = () => $mdSidenav('global-left').toggle();

    this.navData = [{
        name: "Japan",
        state: "japan",
        expand: false,
        modules: [{
            name: "General",
            state: "japan-general"
        }, {
            name: "Food",
            state: "japan-food"
        }]
    }, {
        name: "Ethiopia",
        state: "ethiopia",
        expand: false,
        modules: [{
            name: "General",
            state: "ethiopia-general"
        }, {
            name: "Language",
            state: "ethiopia-language"
        }]
    },{
        name: "Komponenten",
        state: "test",
        expand: false,
        modules: []
    },{
        name: "3D Viewer",
        state: "three-test",
        expand: false,
        modules: []
    }];

    for (const country of this.navData) {
        if ([country, ...country.modules].some(e => e.state === $state.current.name)) {
            country.expand = true;
            break;
        }
    }

    this.menuLockedOpen = () => false; //$mdMedia('gt-md') && $state.current.name !== 'home';

    this.isState = name => $state.current.name === name;
    this.isCountryState = country =>
        [country, ...country.modules].some(e => this.isState(e.state));
    this.isEthiopia = () => this.isCountryState(this.navData.find(e => e.name === 'Ethiopia'));
    this.isJapan = () => this.isCountryState(this.navData.find(e => e.name === 'Japan'));

    $transitions.onSuccess({}, () => {
        this.updateTheme();
    });
    this.updateTheme = () => {
        this.theme = this.getCurrentTheme();
        if (this.theme !== 'default')
            this.wallpaper = this.theme + "_wallpaper";
    };
    this.getCurrentTheme = () => {
        if (this.isJapan())
            return 'japan';
        if (this.isEthiopia())
            return 'ethiopia';
        return 'default';
    };
    this.updateTheme();
});
