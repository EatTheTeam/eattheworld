"use strict";

const app = angular.module("EatTheWorld", [ "ngMaterial", "ui.router"/*"ngRoute", "ui.router" /*, "ngResource", "ngMessages", "ngLocale", "ngSanitize", "ngAnimate", , "ngStorage"*/ ]);

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
            name: 'äthiopien',
            url: '/äthiopien',
            component: 'äthiopien'
        });

    $urlRouterProvider.otherwise('/');
});
