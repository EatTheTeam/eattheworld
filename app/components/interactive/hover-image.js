app.component('hoverImage', {
    templateUrl: 'components/interactive/hover-image.html',
    controller: 'hoverImageController',
    bindings: {
        name: "@",
        image: "@?",
        desc: "@?"
    },
    transclude: true
});

app.controller('hoverImageController', function () {

});