'use strict';

app.component('infoDialog', {
    templateUrl: 'components/structural/info-dialog.html',
    controller: 'InfoDialogController',
    bindings: {
        titleText: '@?',
        text: '@?',
    },
    transclude: true
});

app.controller('InfoDialogController', function ($mdDialog, $transclude) {
    this.$onInit = () => {
        if ((this.text || '').trim() === '')
            $transclude(elements => {
                this.dialogContent = Array.from(elements).reduce((a, e) => {
                    if (e.nodeType === Node.TEXT_NODE) // text
                        return a + e.textContent;
                    if (e.nodeType === Node.ELEMENT_NODE)
                        return a + e.outerHTML;
                    return a;
                }, '');
            });
    };

    this.show = e => {
        let dialog = $mdDialog.alert({
            controller: function ($element) {
                const dialog = $element[0];
                dialog.classList.add('info-dialog');
                const closeButton = dialog.getElementsByClassName('md-button')[0];
                closeButton.addEventListener('click', () => $mdDialog.hide(), false);
            }
        })
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title(this.titleText || 'Info')
            .ok('Close')
            .targetEvent(e);
        if (this.dialogContent)
            dialog = dialog.htmlContent(this.dialogContent);
        else dialog = dialog.textContent(this.text);
        $mdDialog.show(dialog);
    };

});
