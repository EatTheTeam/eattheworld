'use strict';

app.component('textCard', {
    templateUrl: 'components/textCard.html',
    controller: 'textCardController',
    bindings: {
        image: "@?",
        noImage: "<?"
    },
    transclude: true
});

app.controller('textCardController', function () {
});
