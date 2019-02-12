app.component('hoverImage', {
    templateUrl: 'components/interactive/hover-image.html',
    controller: 'hoverImage',
    bindings: {
        name: "@",
        image: "@?",
        desc: "@?"
    },
    transclude: true
});

app.controller('hoverImage', function () {

});