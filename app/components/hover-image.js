app.component('hoverImage', {
    templateUrl: 'components/hover-image.html',
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