'use strict';

app.component('ethiopia', {
    templateUrl: 'components/ethiopia/ethiopia.html',
    controller: 'EthiopiaController'
});

app.controller('EthiopiaController', function ($element) {

    this.$onInit = () => {
        const root = $element.find(".modules");
        let modules = root.find('module-preview');
        for (let i = 0; i < modules.length; i++) {
            const offsetAngle = 360 / modules.length;
            const rotateAngle = offsetAngle * i;
            $(modules[i]).css("transform", "rotate(" + rotateAngle + "deg) translate(0, -200px) rotate(-" + rotateAngle + "deg)")
        }
    };
});
