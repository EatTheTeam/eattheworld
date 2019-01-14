"use strict";

const app = angular.module("EatTheWorld", [ "ngMaterial", "ui.router" /*"ngRoute", "ui.router" /*, "ngResource", "ngMessages", "ngLocale", "ngSanitize", "ngAnimate", , "ngStorage"*/ ]);

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
            name: 'test',
            url: '/test',
            component: 'test'
        })
        .state({
            name: 'three-test',
            url: '/three',
            component: 'threeTest'
        });

    $urlRouterProvider.otherwise('/');
});