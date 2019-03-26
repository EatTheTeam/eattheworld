app.component('numberedCard', {
    templateUrl: 'components/numbered-card.html',
    controller: 'numberedCardController',
    bindings: {
        number: "@",
        image: "@?",
        noImage: "<?",
        color: "@?"
    },
    transclude: true
});

app.controller('numberedCardController', function () {

});