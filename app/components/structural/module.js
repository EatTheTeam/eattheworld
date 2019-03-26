'use strict';

app.component('module', {
    templateUrl: 'components/structural/module.html',
    controller: 'ModuleController',
    transclude: true,
    bindings: {
        title: "@"
    }
});

app.controller('ModuleController', function ($element, $state) {
    this.segments = [];

    this.$postLink = () =>
        this.segments = [...$element.find('segment')].map(segment => {
            return {
                title: segment.getAttribute('title'),
                anchor: segment.getAttribute('anchor')
            }
        });

    this.isState = (name) => $state.current.name.toLowerCase().includes(name);

    this.getState = () => this.isState("ethiopia") ? "ethiopia" : (this.isState("japan") ? "japan" : "home");

    this.$onInit = () => {
        let self = this;
        angular.element(document).ready(function () {
            let primary = document.getElementById("primary-color").style.backgroundColor;
            let accent = document.getElementById("accent-color").style.backgroundColor;

            let {red: rP, green: gP, blue: bP} = self.getRGBfromColor(primary);
            let {red: rA, green: gA, blue: bA} = self.getRGBfromColor(accent);

            self.addStyleRule("::-webkit-scrollbar-thumb", `background: ${primary};`);
            self.addStyleRule("::-webkit-scrollbar-track", `background: rgb(${Math.floor(rA * .8)},${Math.floor(gA * .8)},${Math.floor(bA * .8)});`);
            self.addStyleRule("::-webkit-scrollbar-thumb:hover", `background: rgb(${Math.floor(rP * .8)},${Math.floor(gP * .8)},${Math.floor(bP * .8)});`);
            self.addStyleRule("::-webkit-scrollbar-thumb:active", `background: rgb(${Math.floor(rP * .5)},${Math.floor(gP * .5)},${Math.floor(bP * .5)});`);
            self.addStyleRule("#scroll-container", `overflow-y: scroll; scrollbar-color: ${primary} rgb(${Math.floor(rA * .8)},${Math.floor(gA * .8)},${Math.floor(bA * .8)});`);
        });
    };

    this.getRGBfromColor = (rgbString) => {
        let rPos = rgbString.indexOf(',');
        let gPos = rgbString.indexOf(',', rPos + 1);
        let r = parseInt(rgbString.substring(4, rPos));
        let g = parseInt(rgbString.substring(rPos + 1, gPos));
        let b = parseInt(rgbString.substring(gPos + 1, rgbString.length - 1));
        return {red: r, green: g, blue: b};
    };


    this.addStyle = (content) => {
        const container = document.getElementById("scroll-container");
        const style = document.createElement('style');
        style.type = 'text/css';
        container.appendChild(style);
        style.innerHTML = content;
    };

    this.addStyleRule = (selector, content) => {
        this.addStyle(`${selector} { ${content} }`);
    };
});
