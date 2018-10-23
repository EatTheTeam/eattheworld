"use strict"

app.component("main", {
    templateUrl: "components/main.html",
    controller: "MainController",
    bindings: {}
});

app.controller("MainController", function ($mdSidenav, LoginService) {
    this.toggleLeft = buildToggler('left');
    this.isLoggedIn = function(){
        return LoginService.getLoginState();
    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    };

    this.onSwipeRight = function (event, target) {
        this.toggleLeft();
        console.log("SwipeRight");
    };
});
