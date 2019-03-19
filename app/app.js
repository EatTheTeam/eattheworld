"use strict";

const app = angular.module("EatTheWorld", [ "ngMaterial", "ngSanitize", "ui.router", "smoothScroll" /*"ngRoute", "ui.router" /*, "ngResource", "ngMessages", "ngLocale", "ngAnimate", , "ngStorage"*/ ]);

app.config(['$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

app.config($mdThemingProvider => {
    // $mdThemingProvider.alwaysWatchTheme(true);

    // define
    const japanPrimaryPalette = $mdThemingProvider.extendPalette('red', {
        '500': '#A32145',
        'contrastLightColors': ['500'],
        'contrastDefaultColor': 'light',
    });
    const japanAccentPalette = $mdThemingProvider.extendPalette('purple', {
        '500': '#403251',
        'contrastLightColors': ['500'],
        'contrastDefaultColor': 'light',
    });
    const japanWarnPalette = $mdThemingProvider.extendPalette('orange', {
        '500': '#F9644C',
        'contrastLightColors': ['500'],
        'contrastDefaultColor': 'light',
    });

    // register
    $mdThemingProvider.definePalette('japanPrimary', japanPrimaryPalette);
    $mdThemingProvider.definePalette('japanAccent', japanAccentPalette);
    $mdThemingProvider.definePalette('japanWarn', japanWarnPalette);

    // use
    $mdThemingProvider.theme('japan')
        .primaryPalette('japanPrimary', { 'default': '500' })
        .accentPalette('japanAccent', { 'default': '500' })
        .warnPalette('japanWarn', { 'default': '500' });


    // define
    const ethiopiaPrimaryPalette = $mdThemingProvider.extendPalette('green', {
        '500': '#395733',
        'contrastLightColors': ['500'],
        'contrastDefaultColor': 'light',
    });
    const ethiopiaAccentPalette = $mdThemingProvider.extendPalette('green', {
        '500': '#082402',
        'contrastLightColors': ['500'],
        'contrastDefaultColor': 'light',
    });
    const ethiopiaWarnPalette = $mdThemingProvider.extendPalette('orange', {
        '500': '#2E3950',
        'contrastLightColors': ['500'],
        'contrastDefaultColor': 'light',
    });

    // register
    $mdThemingProvider.definePalette('ethiopiaPrimary', ethiopiaPrimaryPalette);
    $mdThemingProvider.definePalette('ethiopiaAccent', ethiopiaAccentPalette);
    $mdThemingProvider.definePalette('ethiopiaWarn', ethiopiaWarnPalette);

    // use
    $mdThemingProvider.theme('ethiopia')
        .primaryPalette('ethiopiaPrimary', { 'default': '500' })
        .accentPalette('ethiopiaAccent', { 'default': '500' })
        .warnPalette('ethiopiaWarn', { 'default': '500' });
});

app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state({
            name: 'home',
            url: '/',
            component: 'home'
        })
        .state({
            name: 'japan',
            url: '/japan',
            component: 'japan'
        })
        .state({
            name: 'japan-general',
            url: '/japan/general',
            component: 'japanGeneral'
        })
        .state({
            name: 'japan-food',
            url: '/japan/food',
            component: 'japanFood'
        })
        .state({
            name: 'japan-rituals',
            url: '/japan/rituals',
            component: 'japanRituals'
        })
        .state({
            name: 'japan-quiz',
            url: '/japan/quiz',
            component: 'japanQuiz'
        })
        .state({
            name: 'japan-nogos',
            url: '/japan/nogos',
            component: 'japanNogos'
        })
        .state({
            name: 'ethiopia',
            url: '/ethiopia',
            component: 'ethiopia'
        })
        .state({
            name: 'ethiopia-general',
            url: '/ethiopia/general',
            component: 'ethiopiaGeneral'
        })
        .state({
            name: 'ethiopia-language',
            url: '/ethiopia/language',
            component: 'ethiopiaLanguage'
        })
        .state({
            name: 'ethiopia-food',
            url: '/ethiopia/food',
            component: 'ethiopiaFood'
        })
        .state({
            name: 'ethiopia-rituals',
            url: '/ethiopia/rituals',
            component: 'ethiopiaRituals'
        })
        .state({
            name: 'ethiopia-do-dont',
            url: '/ethiopia/dodont',
            component: 'ethiopiaDoDont'
        })
        .state({
            name: 'ethiopia-quiz',
            url: '/ethiopia/quiz',
            component: 'ethiopiaQuiz'
        })
        .state({
            name: 'test',
            url: '/test',
            component: 'test'
        })
        .state({
            name: 'three-test',
            url: '/three',
            component: 'threeTest'
        })
        .state({
            name: 'image-hotspots-test',
            url: '/image-hotspots-test',
            component: 'imageHotspotsTest'
        });

    $urlRouterProvider.otherwise('/');
});