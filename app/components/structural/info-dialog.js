'use strict';

app.component('infoDialog', {
    templateUrl: 'components/structural/info-dialog.html',
    controller: 'InfoDialogController',
    bindings: {
        titleText: '@?',
        text: '@',
    }
});

app.controller('InfoDialogController', function ($mdDialog) {

    this.show = e =>
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(this.titleText || 'Info')
                .textContent(this.text)
                .ok('Got it!')
                .targetEvent(e)
        );

});
