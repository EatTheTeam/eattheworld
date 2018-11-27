
app.component('countryFlag', {
    templateUrl: 'components/home/countryFlag.html',
    bindings: {
        name: "@",
        description: "@"
    },
    transclude: true
});