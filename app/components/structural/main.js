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
        modules: [{
            name: "General",
            state: "japan-general"
        }, {
            name: "Food",
            state: "japan-food"
        }, {
            name: "Rituals",
            state: "japan-rituals"
        }, {
            name: "No Go's",
            state: "japan-nogos"
        }]
    }, {
        name: "Ethiopia",
        state: "ethiopia",
        modules: [{
            name: "General",
            state: "ethiopia-general"
        }, {
            name: "Language",
            state: "ethiopia-language"
        }, {
            name: "Food",
            state: "ethiopia-food"
        }, {
            name: "Rituals",
            state: "ethiopia-rituals"
        }, {
            name: "Do and Don'ts",
            state: "ethiopia-do-dont"
        }, {
            name: "Quiz",
            state: "ethiopia-quiz"
        }]
    },{
        name: "Komponenten",
        state: "test",
        modules: []
    },{
        name: "3D Viewer",
        state: "three-test",
        modules: []
    },{
        name: "Image Hotspots",
        state: "image-hotspots-test",
        modules: []
    }];

    for (const country of this.navData) {
        if ([country, ...country.modules].some(e => e.state === $state.current.name)) {
            country.expand = true;
            break;
        }
    }

    this.search = () => {
        this.searchActive = true;

        if (this.searchText.trim().length === 0)
            return this.stopSearch();

        const searchText = this.searchText.toLowerCase();
        let countryResult = false;
        for (const country of this.navData) {
            country.hideOverview = !'overview'.includes(searchText);

            let moduleResult = false;
            for (const module of country.modules) {
                const match = module.name.toLowerCase().includes(searchText);
                module.hidden = !match;
                if (match)
                    moduleResult = true;
            }

            if (moduleResult || !country.hideOverview)
                countryResult = true;

            country.expand = countryResult;
            country.hidden = !countryResult;
        }

        this.searchNoResults = !countryResult;
    };

    this.stopSearch = () => {
        this.searchActive = false;
        this.searchNoResults = false;
        this.searchText = "";
        for (const country of this.navData) {
            country.hidden = false;
            country.hideOverview = false;
            for (const module of country.modules)
                module.hidden = false;
        }
    };


    this.menuLockedOpen = () => false; //$mdMedia('gt-md') && $state.current.name !== 'home';

    this.isState = name => $state.current.name === name;
    this.isCountryState = country =>
        [country, ...country.modules].some(e => this.isState(e.state));
    this.isEthiopia = () => this.isCountryState(this.navData.find(e => e.name === 'Ethiopia'));
    this.isJapan = () => this.isCountryState(this.navData.find(e => e.name === 'Japan'));

    $transitions.onSuccess({}, () => this.updateTheme());
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
