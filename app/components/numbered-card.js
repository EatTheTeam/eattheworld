app.component('numberedCard', {
    templateUrl: 'components/numbered-card.html',
    controller: 'numberedCardController',
    bindings: {
        number: "@",
        image: "@?",
        color: "@?"
    },
    transclude: true
});

app.controller('numberedCardController', function () {

});