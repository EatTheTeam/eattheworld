"use strict";

const app = angular.module("EatTheWorld", [ "ngMaterial", "ui.router" /*"ngRoute", "ui.router" /*, "ngResource", "ngMessages", "ngLocale", "ngSanitize", "ngAnimate", , "ngStorage"*/ ]);

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