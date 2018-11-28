
app.component('countryFlag', {
    templateUrl: 'components/home/countryFlag.html',
    controller: 'countryFlag',
    bindings: {
        name: "@",
        description: "@"
    },
    transclude: true
});

app.controller('countryFlag', function (globalData) {

    this.$onInit = () => {
        globalData.showToolBar = false;
    };

});