app.service('NavService', function ($mdSidenav) {

    this.getGlobal = () => $mdSidenav('global-left');

});