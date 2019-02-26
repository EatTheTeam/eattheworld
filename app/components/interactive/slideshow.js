'use strict';

app.component('slideshow', {
    templateUrl: 'components/interactive/slideshow.html',
    controller: 'slideshowController',
    transclude: true,
    bindings: {
        heading: '@?',
    }
});

app.controller('slideshowController', function ($element) {

    this.$postLink = () => {
        this.container = $element[0].getElementsByClassName('slides')[0];
        this.slideCount = this.container.children.length;
        this.slides = Array.from({ length: this.slideCount }, (_, i) => i);
    };
    this.selected = 0;
    this.scroll = s => {
        this.selected = s;
        this.container.style.transform = `translateX(-${s}00%)`;
    };

});
