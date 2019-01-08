'use strict';

app.component('ethiopia', {
    templateUrl: 'components/ethiopia/ethiopia.html',
    controller: 'EthiopiaController'
});

app.controller('EthiopiaController', function ($element) {

    /*this.root = $element.find(".modules");
    this.modules = this.root.find('module-preview');
    this.offset = 0;
    this.radius = 200;
    this.rotationStep = () => {
        for (let i = 0; i < this.modules.length; i++) {
            const offsetAngle = 360 / this.modules.length;
            const rotateAngle = offsetAngle * i + (++this.offset);
            $(this.modules[i]).css('transform', `translate(-50%, -50%) rotate(${rotateAngle}deg) translate(0, -${this.radius}px) rotate(-${rotateAngle}deg)`);
        }
    };

    function easeInOutCubic(t) {
        return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
    }*/
    /*this.$onInit = () => {
        const root = $element.find(".modules");
        const modules = root.find('module-preview');
        for (let i = 0; i < modules.length; i++) {
            const module = modules[i];
            const duration = parseInt(/^(\d+)/.exec($(module).css('animation-duration'))[0]);
            /*const fast = duration / 16;
            module.style.animationDuration = fast + "s";
            module.style.animationDelay = -fast * (1/modules.length) * (modules.length-i) + "s";
            setTimeout(() => {
                module.style.animationDuration = duration + "s";
                module.style.animationDelay = -duration * (1/modules.length) * (modules.length-i) + fast + "s";
            }, fast * 1000);
            module.style.animationDelay = -duration * (1/modules.length) * (modules.length-i) + "s";
        }
    };*/
});
