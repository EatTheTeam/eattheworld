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
            $mdDialog.alert({
                controller: function($element) {
                    const dialog = $element[0];
                    dialog.classList.add('info-dialog');
                    const closeButton = dialog.getElementsByClassName('md-button')[0];
                    closeButton.addEventListener('click', () => $mdDialog.hide(), false);
                }
            })
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title(this.titleText || 'Info')
            .textContent(this.text)
            .ok('Close')
            .targetEvent(e)
        );

});
